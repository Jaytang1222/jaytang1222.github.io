class VisitorCounter {
    constructor() {
        this.namespace = 'jaytang-website';
        this.endpoint = 'https://api.countapi.xyz';
        this.element = null;
        this.count = 0;
        this.cacheKey = 'visitorCount';
        this.timestampKey = 'visitorTimestamp';
        this.cacheDuration = 86400000;
        this.init();
    }

    async init() {
        await this.loadFromCache();
        if (!this.count) {
            await this.getVisitorCount();
        }
        this.render();
        this.setupAnimation();
        this.scheduleDailyUpdate();
    }

    async loadFromCache() {
        try {
            const cachedData = localStorage.getItem(this.cacheKey);
            const cachedTimestamp = localStorage.getItem(this.timestampKey);

            if (cachedData && cachedTimestamp) {
                const now = Date.now();
                if (now - parseInt(cachedTimestamp) < this.cacheDuration) {
                    this.count = parseInt(cachedData);
                    return;
                }
            }
        } catch (error) {
            console.error('加载缓存失败:', error);
        }
        this.count = 0;
    }

    async getVisitorCount() {
        try {
            const response = await fetch(`${this.endpoint}/hit/${this.namespace}/home`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({})
            });
            
            if (response.ok) {
                const data = await response.json();
                if (data && data.value !== undefined) {
                    this.count = data.value;
                    this.saveToCache();
                } else {
                    console.warn('API 返回数据格式不正确:', data);
                }
            } else {
                console.error('API 请求失败:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('获取访问量失败:', error);
            this.loadFromCache();
        }
    }

    saveToCache() {
        try {
            localStorage.setItem(this.cacheKey, this.count);
            localStorage.setItem(this.timestampKey, Date.now().toString());
        } catch (error) {
            console.error('保存缓存失败:', error);
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

    scheduleDailyUpdate() {
        try {
            const lastUpdate = localStorage.getItem(this.timestampKey);
            const now = Date.now();

            if (!lastUpdate || now - parseInt(lastUpdate) >= this.cacheDuration) {
                this.getVisitorCount();
            }

            const timeUntilMidnight = this.getTimeUntilMidnight();
            setTimeout(() => {
                this.dailyUpdateLoop();
            }, timeUntilMidnight);
        } catch (error) {
            console.error('调度每日更新失败:', error);
        }
    }

    dailyUpdateLoop() {
        try {
            this.getVisitorCount();
            const timeUntilNextDay = 86400000;
            setTimeout(() => {
                this.dailyUpdateLoop();
            }, timeUntilNextDay);
        } catch (error) {
            console.error('每日更新循环失败:', error);
        }
    }

    getTimeUntilMidnight() {
        const now = new Date();
        const midnight = new Date(now);
        midnight.setHours(24, 0, 0, 0);
        return midnight.getTime() - now.getTime();
    }

    updateDisplay() {
        const countElement = document.getElementById('visitorCount');
        if (countElement) {
            countElement.textContent = this.count.toLocaleString();
        }
    }

    setupLanguageListener() {
        document.addEventListener('languageChanged', () => {
            this.updateText();
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const visitorCounter = new VisitorCounter();
    visitorCounter.setupLanguageListener();
});
