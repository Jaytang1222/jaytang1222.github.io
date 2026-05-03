/**
 * 导航和标签页管理
 */
class Navigation {
    constructor() {
        this.navLinks = document.querySelectorAll('.nav-link');
        this.tabContents = document.querySelectorAll('.tab-content');
        this.heroButtons = document.querySelectorAll('.hero-actions .btn');
        this.currentTab = 'home';
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadInitialTab();
    }

    setupEventListeners() {
        // 导航链接点击事件
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const tabName = link.getAttribute('data-tab');
                this.switchTab(tabName);
            });
        });

        // 首页按钮点击事件（包括快速导航和其他按钮）
        document.addEventListener('click', (e) => {
            const target = e.target.closest('[data-tab]');
            if (target && !target.classList.contains('nav-link')) {
                e.preventDefault();
                const tabName = target.getAttribute('data-tab');
                this.switchTab(tabName);
            }
        });

        // 浏览器前进/后退按钮支持
        window.addEventListener('popstate', (e) => {
            if (e.state && e.state.tab) {
                this.switchTab(e.state.tab, false);
            }
        });
    }

    loadInitialTab() {
        // 从URL hash加载初始标签页
        const hash = window.location.hash.substring(1);
        const initialTab = hash || 'home';
        this.switchTab(initialTab, false);
        
        // 设置初始历史状态
        if (!window.history.state) {
            window.history.replaceState({ tab: initialTab }, '', `#${initialTab}`);
        }
    }

    switchTab(tabName, pushState = true) {
        if (tabName === this.currentTab) return;

        // 隐藏所有标签页内容
        this.tabContents.forEach(content => {
            content.classList.remove('active');
        });

        // 移除所有导航链接的active类
        this.navLinks.forEach(link => {
            link.classList.remove('active');
        });

        // 显示目标标签页
        const targetTab = document.getElementById(tabName);
        if (targetTab) {
            targetTab.classList.add('active');
            
            // 添加active类到对应的导航链接
            const targetLink = document.querySelector(`.nav-link[data-tab="${tabName}"]`);
            if (targetLink) {
                targetLink.classList.add('active');
            }

            // 更新当前标签页
            this.currentTab = tabName;

            // 更新URL和历史记录
            if (pushState) {
                window.history.pushState({ tab: tabName }, '', `#${tabName}`);
            }

            // 滚动到顶部
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // 触发标签页切换事件
            document.dispatchEvent(new CustomEvent('tabChanged', { detail: { tab: tabName } }));
        }
    }

    getCurrentTab() {
        return this.currentTab;
    }
}

// 初始化导航
document.addEventListener('DOMContentLoaded', () => {
    window.navigation = new Navigation();
});
