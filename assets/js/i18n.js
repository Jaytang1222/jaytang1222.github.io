/**
 * 国际化管理
 */
class I18n {
    constructor() {
        this.currentLang = localStorage.getItem('lang') || 'zh';
        this.translations = {};
        this.init();
    }

    async init() {
        await this.loadTranslations(this.currentLang);
        this.applyTranslations();
        this.setupEventListeners();
    }

    async loadTranslations(lang) {
        try {
            const response = await fetch(`assets/data/${lang}.json`);
            this.translations = await response.json();
        } catch (error) {
            console.error('Failed to load translations:', error);
        }
    }

    applyTranslations() {
        // 处理文本内容
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const value = this.getNestedValue(this.translations, key);
            if (value) {
                element.textContent = value;
            }
        });

        // 处理placeholder属性
        const placeholderElements = document.querySelectorAll('[data-i18n_placeholder]');
        placeholderElements.forEach(element => {
            const key = element.getAttribute('data-i18n_placeholder');
            const value = this.getNestedValue(this.translations, key);
            if (value) {
                element.placeholder = value;
            }
        });

        // 处理title属性
        const titleElements = document.querySelectorAll('[data-i18n_title]');
        titleElements.forEach(element => {
            const key = element.getAttribute('data-i18n_title');
            const value = this.getNestedValue(this.translations, key);
            if (value) {
                element.title = value;
            }
        });

        // 处理aria-label属性
        const ariaElements = document.querySelectorAll('[data-i18n_aria]');
        ariaElements.forEach(element => {
            const key = element.getAttribute('data-i18n_aria');
            const value = this.getNestedValue(this.translations, key);
            if (value) {
                element.setAttribute('aria-label', value);
            }
        });

        // 更新HTML lang属性
        document.documentElement.lang = this.currentLang === 'zh' ? 'zh-CN' : 'en';
        
        // 更新语言切换按钮文本
        const langSwitch = document.getElementById('langSwitch');
        if (langSwitch) {
            langSwitch.textContent = this.currentLang === 'zh' ? 'EN' : '中文';
        }
    }

    getNestedValue(obj, path) {
        return path.split('.').reduce((current, key) => current && current[key], obj);
    }

    async switchLanguage(lang) {
        if (lang === this.currentLang) return;

        this.currentLang = lang;
        localStorage.setItem('lang', lang);
        await this.loadTranslations(lang);
        this.applyTranslations();
        
        // 触发语言切换事件
        document.dispatchEvent(new Event('languageChanged'));
    }

    setupEventListeners() {
        const langSwitch = document.getElementById('langSwitch');
        if (langSwitch) {
            langSwitch.addEventListener('click', () => {
                const newLang = this.currentLang === 'zh' ? 'en' : 'zh';
                this.switchLanguage(newLang);
            });
        }
    }
}

// 初始化国际化
document.addEventListener('DOMContentLoaded', () => {
    new I18n();
});
