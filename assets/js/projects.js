/**
 * 项目数据和展示管理
 */
const projectsData = [
    {
        id: 1,
        title: {
            zh: "STM32智能小车",
            en: "STM32 Smart Car"
        },
        description: {
            zh: "基于STM32F103C8T6的智能小车项目，实现了循迹、避障、遥控等多种功能。采用PID算法进行速度控制，使用红外传感器和超声波传感器实现环境感知。",
            en: "Smart car project based on STM32F103C8T6, featuring line tracking, obstacle avoidance, and remote control. Implements PID algorithm for speed control and uses infrared and ultrasonic sensors for environment perception."
        },
        techStack: ["STM32", "C/C++", "Keil 5", "PCB", "PID算法"],
        category: "embedded",
        features: {
            zh: [
                "红外循迹，精确路径跟踪",
                "超声波避障，智能路径规划",
                "蓝牙遥控，实时控制",
                "OLED显示，状态监控"
            ],
            en: [
                "Infrared line tracking with precise path following",
                "Ultrasonic obstacle avoidance with intelligent path planning",
                "Bluetooth remote control with real-time response",
                "OLED display for status monitoring"
            ]
        },
        achievements: {
            zh: [
                "实现了稳定的PID速度控制",
                "完成PCB设计与制作",
                "获得实验室项目优秀奖"
            ],
            en: [
                "Achieved stable PID speed control",
                "Completed PCB design and fabrication",
                "Received lab project excellence award"
            ]
        },
        github: "https://github.com/Jaytang1222/stm32-smart-car",
        demo: null,
        image: "assets/images/projects/stm32-car.jpg",
        status: "completed"
    },
    {
        id: 2,
        title: {
            zh: "Chrome浏览器扩展",
            en: "Chrome Browser Extension"
        },
        description: {
            zh: "正在开发的Chrome浏览器扩展，旨在提供高效的网页辅助功能。支持自定义快捷键、页面元素操作、数据同步等功能。",
            en: "Chrome extension in development, designed to provide efficient web assistance features. Supports custom shortcuts, page element manipulation, and data synchronization."
        },
        techStack: ["JavaScript", "HTML5", "CSS3", "Chrome API", "Webpack"],
        category: "web",
        features: {
            zh: [
                "自定义快捷键绑定",
                "页面元素快速操作",
                "云端数据同步",
                "多语言支持"
            ],
            en: [
                "Custom keyboard shortcuts",
                "Quick page element manipulation",
                "Cloud data synchronization",
                "Multi-language support"
            ]
        },
        achievements: {
            zh: [
                "完成核心功能开发",
                "实现跨浏览器兼容",
                "用户界面设计优化"
            ],
            en: [
                "Completed core functionality development",
                "Achieved cross-browser compatibility",
                "Optimized user interface design"
            ]
        },
        github: "https://github.com/Jaytang1222/chrome-extension",
        demo: null,
        image: "assets/images/projects/chrome-ext.jpg",
        status: "in-progress"
    },
    {
        id: 3,
        title: {
            zh: "物联网环境监测系统",
            en: "IoT Environmental Monitoring System"
        },
        description: {
            zh: "基于ESP32的物联网环境监测系统，实时采集温湿度、光照、空气质量等数据，通过MQTT协议上传至云端，支持Web端和移动端查看。",
            en: "IoT environmental monitoring system based on ESP32, collecting real-time data on temperature, humidity, light, and air quality. Data is uploaded to the cloud via MQTT protocol and accessible through web and mobile interfaces."
        },
        techStack: ["ESP32", "Arduino", "MQTT", "Node.js", "Vue.js", "MongoDB"],
        category: "iot",
        features: {
            zh: [
                "多传感器数据采集",
                "实时数据可视化",
                "历史数据分析",
                "异常报警推送"
            ],
            en: [
                "Multi-sensor data collection",
                "Real-time data visualization",
                "Historical data analysis",
                "Abnormal alert notifications"
            ]
        },
        achievements: {
            zh: [
                "实现稳定的数据传输",
                "完成Web管理平台",
                "部署至云服务器"
            ],
            en: [
                "Achieved stable data transmission",
                "Completed web management platform",
                "Deployed to cloud server"
            ]
        },
        github: "https://github.com/Jaytang1222/iot-monitoring",
        demo: "https://iot-demo.jaytang.com",
        image: "assets/images/projects/iot-system.jpg",
        status: "completed"
    }
];

class ProjectsManager {
    constructor() {
        this.projects = projectsData;
        this.currentFilter = 'all';
        this.currentLang = localStorage.getItem('lang') || 'zh';
        this.projectsGrid = document.getElementById('projectsGrid');
        this.filterButtons = document.querySelectorAll('.filter-btn');
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.renderProjects();
        this.renderProjectsPreview(); // 渲染首页项目预览
    }

    setupEventListeners() {
        // 过滤按钮事件
        this.filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const filter = e.target.getAttribute('data-filter');
                this.setFilter(filter);
            });
        });

        // 语言切换事件
        document.addEventListener('languageChanged', () => {
            this.currentLang = localStorage.getItem('lang') || 'zh';
            this.renderProjects();
        });

        // 标签页切换事件
        document.addEventListener('tabChanged', (e) => {
            if (e.detail.tab === 'projects') {
                this.animateProjects();
            }
        });
    }

    setFilter(filter) {
        this.currentFilter = filter;
        
        // 更新按钮状态
        this.filterButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-filter') === filter) {
                btn.classList.add('active');
            }
        });

        this.renderProjects();
    }

    renderProjects() {
        if (!this.projectsGrid) return;

        const filteredProjects = this.currentFilter === 'all' 
            ? this.projects 
            : this.projects.filter(p => p.category === this.currentFilter);

        this.projectsGrid.innerHTML = filteredProjects.map(project => 
            this.createProjectCard(project)
        ).join('');

        // 添加点击事件打开模态框
        this.projectsGrid.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('click', () => {
                const projectId = parseInt(card.getAttribute('data-project-id'));
                this.openProjectModal(projectId);
            });
        });

        this.animateProjects();
    }

    createProjectCard(project) {
        const lang = this.currentLang;
        const title = project.title[lang];
        const description = project.description[lang];
        
        const statusBadge = project.status === 'completed' 
            ? `<span class="status-badge completed">${lang === 'zh' ? '已完成' : 'Completed'}</span>`
            : `<span class="status-badge in-progress">${lang === 'zh' ? '进行中' : 'In Progress'}</span>`;

        const techStackHTML = project.techStack.slice(0, 3).map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');

        return `
            <div class="project-card" data-project-id="${project.id}">
                <div class="project-header">
                    <div class="project-image">
                        <img src="${project.image}" alt="${title}" loading="lazy" onerror="this.src='assets/images/placeholder.jpg'">
                        ${statusBadge}
                    </div>
                </div>
                <div class="project-body">
                    <h3 class="project-title">${title}</h3>
                    <p class="project-description">${description}</p>
                    <div class="project-tech-stack">
                        ${techStackHTML}
                    </div>
                </div>
            </div>
        `;
    }

    openProjectModal(projectId) {
        const project = this.projects.find(p => p.id === projectId);
        if (!project) return;

        const lang = this.currentLang;
        const title = project.title[lang];
        const description = project.description[lang];
        const features = project.features[lang];
        const achievements = project.achievements[lang];

        const techStackHTML = project.techStack.map(tech => 
            `<span class="modal-tech-tag">${tech}</span>`
        ).join('');

        const featuresHTML = features.map(feature => 
            `<li>${feature}</li>`
        ).join('');

        const achievementsHTML = achievements.map(achievement => 
            `<li>${achievement}</li>`
        ).join('');

        const githubBtn = project.github 
            ? `<a href="${project.github}" class="modal-link github" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>${lang === 'zh' ? 'GitHub' : 'GitHub'}</span>
            </a>`
            : '';

        const demoBtn = project.demo 
            ? `<a href="${project.demo}" class="modal-link demo" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                <span>${lang === 'zh' ? '在线演示' : 'Live Demo'}</span>
            </a>`
            : '';

        const modalHTML = `
            <div class="project-modal active" id="projectModal">
                <div class="modal-content">
                    <div class="modal-header">
                        <div>
                            <h2 class="modal-title">${title}</h2>
                        </div>
                        <button class="modal-close" onclick="document.getElementById('projectModal').remove()">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="modal-section">
                            <h3 class="modal-section-title">${lang === 'zh' ? '项目简介' : 'Description'}</h3>
                            <p class="modal-description">${description}</p>
                        </div>

                        <div class="modal-section">
                            <h3 class="modal-section-title">${lang === 'zh' ? '技术栈' : 'Tech Stack'}</h3>
                            <div class="modal-tech-stack">
                                ${techStackHTML}
                            </div>
                        </div>

                        <div class="modal-section">
                            <h3 class="modal-section-title">${lang === 'zh' ? '主要功能' : 'Key Features'}</h3>
                            <ul class="modal-list">
                                ${featuresHTML}
                            </ul>
                        </div>

                        <div class="modal-section">
                            <h3 class="modal-section-title">${lang === 'zh' ? '项目成果' : 'Achievements'}</h3>
                            <ul class="modal-list">
                                ${achievementsHTML}
                            </ul>
                        </div>

                        ${githubBtn || demoBtn ? `
                            <div class="modal-links">
                                ${githubBtn}
                                ${demoBtn}
                            </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;

        // 移除已存在的模态框
        const existingModal = document.getElementById('projectModal');
        if (existingModal) {
            existingModal.remove();
        }

        // 添加新模态框
        document.body.insertAdjacentHTML('beforeend', modalHTML);

        // 点击背景关闭
        const modal = document.getElementById('projectModal');
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });

        // ESC键关闭
        const handleEsc = (e) => {
            if (e.key === 'Escape') {
                modal.remove();
                document.removeEventListener('keydown', handleEsc);
            }
        };
        document.addEventListener('keydown', handleEsc);
    }

    animateProjects() {
        const cards = this.projectsGrid.querySelectorAll('.project-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    renderProjectsPreview() {
        const previewContainer = document.getElementById('projectsPreview');
        if (!previewContainer) return;

        // 只显示前2个项目
        const previewProjects = this.projects.slice(0, 2);
        const lang = this.currentLang;

        previewContainer.innerHTML = previewProjects.map(project => {
            const title = project.title[lang];
            const description = project.description[lang];
            const techStack = project.techStack.slice(0, 3); // 只显示前3个技术

            return `
                <div class="project-preview-card" data-project-id="${project.id}">
                    <h3 class="project-preview-title">${title}</h3>
                    <p class="project-preview-desc">${description}</p>
                    <div class="project-preview-tags">
                        ${techStack.map(tech => `<span class="project-preview-tag">${tech}</span>`).join('')}
                    </div>
                </div>
            `;
        }).join('');

        // 添加点击事件，点击后跳转到项目页面
        previewContainer.querySelectorAll('.project-preview-card').forEach(card => {
            card.addEventListener('click', () => {
                // 触发导航到项目页面
                if (window.navigation) {
                    window.navigation.switchTab('projects');
                }
            });
        });
    }
}

// 初始化项目管理器
document.addEventListener('DOMContentLoaded', () => {
    new ProjectsManager();
});
