class VisitorCounter {
    constructor() {
        this.element = null;
        this.count = 0;
        this.db = null;
        this.visitorRef = null;
        this.init();
    }

    async init() {
        if (!isFirebaseConfigured()) {
            console.warn('Firebase 未配置，请在 js/firebase-config.js 中填写配置信息');
            this.count = 0;
        } else {
            await this.initFirebase();
            await this.getVisitorCount();
        }
        this.render();
        this.setupAnimation();
    }

    async initFirebase() {
        try {
            if (!firebase.apps.length) {
                firebase.initializeApp(firebaseConfig);
            }

            this.db = firebase.database();
            this.visitorRef = this.db.ref('visitorCount/home');
        } catch (error) {
            console.error('初始化 Firebase 失败:', error);
        }
    }

    async getVisitorCount() {
        if (!isFirebaseConfigured()) {
            return;
        }

        try {
            const snapshot = await this.visitorRef.transaction((currentCount) => {
                if (currentCount === null) {
                    return 1;
                }
                return currentCount + 1;
            });

            if (snapshot.committed) {
                const data = await this.visitorRef.once('value');
                this.count = data.val() || 0;
            } else {
                console.warn('事务提交失败，读取当前值');
                const data = await this.visitorRef.once('value');
                this.count = data.val() || 0;
            }
        } catch (error) {
            console.error('获取访问量失败:', error);
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
    visitorCounter.setupLanguageListener();
});
