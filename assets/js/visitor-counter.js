class VisitorCounter {
    constructor() {
        this.element = null;
        this.count = 0;
        // 替换为你的 Cloudflare Worker URL
        this.apiUrl = 'https://visitor-counter.jaytang12221.workers.dev/api/visitor';
        this.init();
    }

    async init() {
        try {
            await this.getVisitorCount();
        } catch (error) {
            console.error('访客计数器初始化失败:', error);
            this.count = 0;
        }
        this.render();
        this.setupAnimation();
        this.setupLanguageListener();
    }

    async getVisitorCount() {
        try {
            console.log('开始获取访客计数...');
            
            const response = await fetch(this.apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            this.count = data.count || 0;
            console.log('访客计数获取成功:', this.count);
        } catch (error) {
            console.error('获取访问量失败:', error);
            console.error('错误详情:', error.message);
            this.count = 0;
        }
    }

    render() {
        this.element = document.createElement('div');
        this.element.className = 'visitor-counter';
        this.element.innerHTML = `
            <span class="visitor-icon">👥</span>
            <span class="visitor-text">访问人数</span>
            <span class="visitor-count" id="visitorCount">${this.count.toLocaleString()}</span>
        `;

        const navActions = document.querySelector('.nav-actions');
        if (navActions) {
            navActions.appendChild(this.element);
        }

        this.updateText();
    }

    updateText() {
        const currentLang = localStorage.getItem('lang') || 'zh';
        const textElement = this.element.querySelector('.visitor-text');
        if (textElement) {
            textElement.textContent = currentLang === 'zh' ? '访问人数' : 'Visitors';
        }
    }

    setupAnimation() {
        const countElement = document.getElementById('visitorCount');
        if (countElement) {
            this.animateCount(countElement, 0, this.count, 1500);
        }
    }

    animateCount(element, start, end, duration) {
        if (start === end) return;

        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            element.textContent = Math.floor(progress * (end - start) + start).toLocaleString();
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    setupLanguageListener() {
        document.addEventListener('languageChanged', () => {
            this.updateText();
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const visitorCounter = new VisitorCounter();
});
