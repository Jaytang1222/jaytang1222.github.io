// Cloudflare Worker 访客计数器
// 部署到 Cloudflare Workers 后，将 URL 更新到 js/visitor-counter.js 中

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
    const url = new URL(request.url)
    
    // 处理 CORS 预检请求
    if (request.method === 'OPTIONS') {
        return handleCORS()
    }
    
    // 路由处理
    if (url.pathname === '/api/visitor' && request.method === 'POST') {
        return await incrementVisitor(request)
    }
    
    if (url.pathname === '/api/visitor' && request.method === 'GET') {
        return await getVisitor(request)
    }
    
    // 默认响应
    return new Response('Visitor Counter API', {
        headers: getCORSHeaders()
    })
}

// 增加访客计数
async function incrementVisitor(request) {
    try {
        // 从 KV 获取当前计数
        let count = await VISITOR_KV.get('count')
        count = count ? parseInt(count) : 0
        
        // 防刷机制：检查 IP 和时间戳
        const clientIP = request.headers.get('CF-Connecting-IP') || 'unknown'
        const lastVisitKey = `last_visit_${clientIP}`
        const lastVisit = await VISITOR_KV.get(lastVisitKey)
        const now = Date.now()
        
        // 如果同一 IP 在 60 秒内访问，不增加计数
        if (lastVisit && (now - parseInt(lastVisit)) < 60000) {
            console.log('Same IP within 60s, not counting')
            return new Response(JSON.stringify({ 
                count: count,
                message: 'Already counted recently'
            }), {
                headers: getCORSHeaders()
            })
        }
        
        // 增加计数
        count++
        
        // 保存到 KV
        await VISITOR_KV.put('count', count.toString())
        await VISITOR_KV.put(lastVisitKey, now.toString(), {
            expirationTtl: 60 // 60 秒后过期
        })
        
        console.log(`Visitor count updated: ${count}`)
        
        return new Response(JSON.stringify({ 
            count: count,
            message: 'Count updated'
        }), {
            headers: getCORSHeaders()
        })
    } catch (error) {
        console.error('Error incrementing visitor:', error)
        return new Response(JSON.stringify({ 
            error: 'Failed to update count',
            count: 0
        }), {
            status: 500,
            headers: getCORSHeaders()
        })
    }
}

// 获取访客计数（不增加）
async function getVisitor(request) {
    try {
        let count = await VISITOR_KV.get('count')
        count = count ? parseInt(count) : 0
        
        return new Response(JSON.stringify({ count }), {
            headers: getCORSHeaders()
        })
    } catch (error) {
        console.error('Error getting visitor count:', error)
        return new Response(JSON.stringify({ 
            error: 'Failed to get count',
            count: 0
        }), {
            status: 500,
            headers: getCORSHeaders()
        })
    }
}

// 处理 CORS 预检请求
function handleCORS() {
    return new Response(null, {
        headers: getCORSHeaders()
    })
}

// 获取 CORS 头
function getCORSHeaders() {
    return {
        'Access-Control-Allow-Origin': '*', // 生产环境建议改为你的具体域名
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
    }
}
