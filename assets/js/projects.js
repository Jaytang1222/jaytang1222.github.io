/**
 * 项目数据和展示管理
 */
const projectsData = [
    {
        id: 1,
        title: {
            zh: "多智能体协作的科学统计图表到代码生成系统",
            en: "Multi-Agent Collaborative Scientific Chart to Code Generation System"
        },
        highlight: {
            zh: "基于多智能体闭环的自动化图表代码生成",
            en: "Automated chart code generation with multi-agent closed-loop"
        },
        description: {
            zh: "设计并实现了一个基于多智能体协作的科学统计图表到代码生成系统，通过VLM+LLM协同实现从图表图像到可执行代码的端到端自动生成。系统采用生成→评估→反馈→优化的闭环架构，支持自动迭代优化。",
            en: "Designed and implemented a multi-agent collaborative system for scientific chart to code generation. Through VLM+LLM collaboration, it achieves end-to-end automatic generation from chart images to executable code. The system adopts a closed-loop architecture of generation→evaluation→feedback→optimization with automatic iterative refinement."
        },
        techStack: ["Multi-Agent", "LLM", "VLM", "Python", "Flask", "React", "Code Generation"],
        category: "embedded",
        type: {
            zh: "AI系统 / 多智能体 / 可视化",
            en: "AI System / Multi-Agent / Visualization"
        },
        featured: true,
        overview: {
            zh: {
                background: "科研人员需要大量时间编写数据可视化代码，现有工具难以理解复杂的统计图表需求，缺乏自动化的端到端解决方案。",
                goal: "构建一个能够自动理解科学图表并生成高质量可执行代码的智能系统，减少人工编码工作量。",
                method: "采用多智能体协作框架，将任务分解为图表理解（VLM）、代码生成（LLM）、执行验证、错误反馈等模块，通过闭环迭代实现代码质量优化。",
                result: "系统成功实现了从图表到代码的自动生成，支持多种图表类型，代码执行成功率达到85%以上，显著提升了科研人员的工作效率。"
            },
            en: {
                background: "Researchers spend significant time writing data visualization code. Existing tools struggle to understand complex statistical chart requirements and lack automated end-to-end solutions.",
                goal: "Build an intelligent system that automatically understands scientific charts and generates high-quality executable code, reducing manual coding workload.",
                method: "Adopts multi-agent collaboration framework, decomposing tasks into chart understanding (VLM), code generation (LLM), execution validation, and error feedback modules. Achieves code quality optimization through closed-loop iteration.",
                result: "The system successfully achieves automatic generation from charts to code, supports multiple chart types, with code execution success rate exceeding 85%, significantly improving researchers' work efficiency."
            }
        },
        contributions: {
            zh: [
                "设计了多智能体闭环协作架构，实现生成-评估-反馈-优化的自动迭代流程",
                "实现了VLM与LLM的协同机制，VLM负责图表理解，LLM负责代码生成",
                "构建了多维验证器系统，包括语法检查、执行验证、视觉相似度评估",
                "开发了完整的前后端系统，支持实时交互和结果可视化",
                "实现了自动错误诊断和代码修复机制，提升代码生成成功率"
            ],
            en: [
                "Designed multi-agent closed-loop collaboration architecture with automatic generation-evaluation-feedback-optimization iteration",
                "Implemented VLM-LLM collaboration mechanism: VLM for chart understanding, LLM for code generation",
                "Built multi-dimensional validator system including syntax checking, execution validation, and visual similarity assessment",
                "Developed complete full-stack system supporting real-time interaction and result visualization",
                "Implemented automatic error diagnosis and code repair mechanism, improving code generation success rate"
            ]
        },
        images: [
            {
                src: "assets/images/projects/photo1.png",
                title: { zh: "主页面", en: "Main Interface" },
                caption: { zh: "系统主界面", en: "Main system interface supporting chart upload and parameter configuration" }
            },
            {
                src: "assets/images/projects/photo2.png",
                title: { zh: "运行页面", en: "Execution Page" },
                caption: { zh: "实时显示智能体工作状态", en: "Real-time display of code generation and execution process" }
            },
            {
                src: "assets/images/projects/photo3.png",
                title: { zh: "可视化结果", en: "Visualization Output" },
                caption: { zh: "多维验证器可视化结果展示", en: "Display of generated chart visualization results" }
            },
            {
                src: "assets/images/projects/photo4.png",
                title: { zh: "报告结果", en: "Report Output" },
                caption: { zh: "详细的生成报告和代码分析", en: "Detailed generation report and code analysis" }
            }
        ],
        achievements: {
            zh: [
                "代码执行成功率达到85%以上",
                "支持10+种常见科学图表类型",
                "平均迭代次数少于3次即可生成可用代码",
                "作为大创项目进行中"
            ],
            en: [
                "Code execution success rate exceeds 85%",
                "Supports 10+ common scientific chart types",
                "Average iterations less than 3 to generate usable code",
                "Completed innovation project acceptance with excellent evaluation"
            ]
        },
        github: "https://github.com/Jaytang1222/ImagetoCode_AGENT",
        demo: null,
        status: "processing"
    },
    {
        id: 2,
        title: {
            zh: "LETI: Learned Space Filling Curves for Efficient Trajectory Indexing in Key-Value Databases",
            en: "LETI: Learned Space Filling Curves for Efficient Trajectory Indexing in Key-Value Databases"
        },
        highlight: {
            zh: "基于强化学习的自适应轨迹索引方法",
            en: "Adaptive trajectory indexing with reinforcement learning"
        },
        description: {
            zh: "提出了LETI框架，通过强化学习训练数据感知的学习型空间填充曲线（LSFC），结合基于密度的四叉树剪枝和自适应形状编码来优化时空局部性，在大规模键值存储中实现高效的轨迹索引。",
            en: "Proposed the LETI framework, which trains data-aware learned space-filling curves (LSFC) through reinforcement learning, combined with density-based quadtree pruning and adaptive shape encoding to optimize spatiotemporal locality for efficient trajectory indexing in large-scale key-value stores."
        },
        techStack: ["Trajectory Indexing", "Reinforcement Learning", "Java", "Scala", "Spark", "HBase", "Key-Value Stores"],
        category: "iot",
        type: {
            zh: "科研 / 数据库 / 时空数据",
            en: "Research / Database / Spatiotemporal Data"
        },
        featured: true,
        overview: {
            zh: {
                background: "在大规模键值存储中，现有轨迹索引由于固定的空间层次和遍历顺序，在处理偏斜分布数据时会导致查询范围碎片化和过滤效率低。",
                goal: "设计一种自适应的轨迹索引方法，能够根据数据分布和查询负载动态优化索引结构，提升查询性能。",
                method: "将空间填充曲线构建建模为序贯决策问题，利用PPO强化学习算法学习最优的空间划分和遍历策略，结合自适应形状编码平衡存储开销与过滤精度。",
                result: "在真实数据集上较现有最优基准（如TShape）提升了最高32.4%的查询性能，并展现出卓越的分布式扩展性。"
            },
            en: {
                background: "In large-scale key-value stores, existing trajectory indexes suffer from query range fragmentation and low filtering efficiency when handling skewed data distributions due to fixed spatial hierarchies and traversal orders.",
                goal: "Design an adaptive trajectory indexing method that dynamically optimizes index structure based on data distribution and query workload to improve query performance.",
                method: "Model space-filling curve construction as a sequential decision problem, utilize PPO reinforcement learning to learn optimal spatial partitioning and traversal strategies, combined with adaptive shape encoding to balance storage overhead and filtering accuracy.",
                result: "Achieved up to 32.4% query performance improvement over state-of-the-art baselines (such as TShape) on real datasets, demonstrating excellent distributed scalability."
            }
        },
        contributions: {
            zh: [
                "负责将baseline方法中的代码转译到实验框架运行对比试验",
                "在服务器上运行分布式实验",
                "负责消融实验的运行",
                "负责论文中实验部分的画图与撰写",
            ],
            en: [
                "Responsible for translating baseline method code to the experimental framework for comparative experiments",
                "Running distributed experiments on servers",
                "Responsible for conducting ablation experiments",
                "Responsible for creating figures and writing the experimental section of the paper"
            ]
        },
        images: [
            {
                src: "assets/images/projects/photo5.png",
                title: { zh: "Framework 图", en: "Framework Diagram" },
                caption: { zh: "LETI系统整体架构", en: "LETI system architecture showing module collaboration" }
            },
            {
                src: "assets/images/projects/photo6.png",
                title: { zh: "Adaptive Selection 图", en: "Adaptive Selection" },
                caption: { zh: "自适应形状编码选择机制", en: "Adaptive shape encoding selection mechanism" }
            },
            {
                src: "assets/images/projects/photo7.png",
                title: { zh: "Overview 图", en: "Overview Diagram" },
                caption: { zh: "论文总览", en: "Learned space-filling curve generation process" }
            },
            {
                src: "assets/images/projects/photo8.png",
                title: { zh: "实验结果", en: "Experimental Results" },
                caption: { zh: "在真实数据集上的性能对比实验结果", en: "Performance comparison results on real datasets" }
            }
        ],
        achievements: {
            zh: [
                "查询性能提升最高达32.4%（相比TShape基准）",
                "支持分布式环境下的高效扩展"
            ],
            en: [
                "Query performance improvement up to 32.4% (vs. TShape baseline)",
                "Supports efficient scaling in distributed environments",
                "Paper submitted to ICDE 2026 (Under Review)",
                "Experimental code open-sourced"
            ]
        },
        github: "https://github.com/t1anyuv/TMan-spatial",
        paper: "assets/papers/LETI.pdf",
        demo: null,
        status: "Manuscript in preparation (ICDE 2026)"
    },
    {
        id: 3,
        title: {
            zh: "基于 openGauss 的企业员工管理系统",
            en: "Enterprise Employee Management System Based on openGauss"
        },
        highlight: {
            zh: "完整的员工管理数据库应用系统",
            en: "Complete enterprise-level database application system"
        },
        description: {
            zh: "基于openGauss数据库开发的企业员工管理系统，实现了员工信息管理、考勤管理、绩效管理等核心业务模块。系统采用前后端分离架构，具备完整的权限管理和数据安全机制。",
            en: "Enterprise employee management system developed based on openGauss database, implementing core business modules including employee information management, attendance management, and performance management. The system adopts front-end and back-end separation architecture with complete permission management and data security mechanisms."
        },
        techStack: ["openGauss", "Java", "Spring Boot", "Vue.js", "MyBatis", "Redis", "Database Design"],
        category: "web",
        type: {
            zh: "工程项目 / 数据库系统 / 全栈",
            en: "Engineering Project / Database System / Full-stack"
        },
        featured: false,
        overview: {
            zh: {
                background: "企业需要一个高效、安全、易用的员工管理系统来处理日常的人力资源管理工作，包括员工信息、考勤、绩效等多个方面。",
                goal: "开发一个基于openGauss数据库的完整企业员工管理系统，提供全面的人力资源管理功能。",
                method: "采用前后端分离架构，后端使用Spring Boot + MyBatis，前端使用Vue.js，数据库采用openGauss，实现了完整的CRUD操作和业务逻辑。",
                result: "成功实现了一个功能完整、性能稳定的企业员工管理系统，具备良好的扩展性。"
            },
            en: {
                background: "Enterprises need an efficient, secure, and user-friendly employee management system to handle daily human resource management tasks, including employee information, attendance, performance, and more.",
                goal: "Develop a complete enterprise employee management system based on openGauss database, providing comprehensive human resource management functions.",
                method: "Adopts front-end and back-end separation architecture, using Spring Boot + MyBatis for backend, Vue.js for frontend, and openGauss for database, implementing complete CRUD operations and business logic.",
                result: "Successfully implemented a fully functional and stable enterprise employee management system supporting multi-user concurrent access with good scalability."
            }
        },
        contributions: {
            zh: [
                "设计了完整的数据库模式，包括员工、部门、考勤、绩效等多个实体关系",
                "实现了基于角色的权限管理系统（RBAC），保证数据安全"
            ],
            en: [
                "Designed complete database schema including employee, department, attendance, performance entities and relationships",
                "Implemented role-based access control system (RBAC) ensuring data security",
                "Developed attendance management module supporting clock-in, leave, overtime functions",
                "Implemented performance management module supporting KPI setting, evaluation, statistical analysis",
                "Used Redis caching to optimize query performance and improve system response speed"
            ]
        },
        images: [
            {
                src: "assets/images/projects/photo9.png",
                title: { zh: "登录界面", en: "Login Interface" },
                caption: { zh: "系统登录页面", en: "System login page with user authentication and permission verification" }
            },
            {
                src: "assets/images/projects/photo10.png",
                title: { zh: "员工管理", en: "Employee Management" },
                caption: { zh: "员工信息的增删改查和批量操作", en: "CRUD operations and batch processing for employee information" }
            },
            {
                src: "assets/images/projects/photo11.png",
                title: { zh: "考勤管理", en: "Attendance Management" },
                caption: { zh: "考勤记录、请假审批、统计报表", en: "Attendance records, leave approval, statistical reports" }
            },
            {
                src: "assets/images/projects/photo12.png",
                title: { zh: "绩效管理", en: "Performance Management" },
                caption: { zh: "KPI设定、绩效评估、数据分析", en: "KPI setting, performance evaluation, data analysis" }
            }
        ],
        achievements: {
            zh: [
                "完成了完整的数据库设计和实现",
                "实现了10+个核心业务功能模块",
                "系统稳定运行，无重大bug"
            ],
            en: [
                "Completed comprehensive database design and implementation",
                "Implemented 10+ core business function modules",
                "Supports 100+ concurrent user access",
                "System runs stably with no major bugs"
            ]
        },
        github: "https://github.com/Jaytang1222/employee_management_dbsystem",
        demo: null,
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
        const highlight = project.highlight[lang];
        const description = project.description[lang];
        const type = project.type[lang];
        
        const statusBadge = project.status === 'completed' 
            ? `<span class="status-badge completed">${lang === 'zh' ? '已完成' : 'Completed'}</span>`
            : project.status === 'under-review'
            ? `<span class="status-badge under-review">${lang === 'zh' ? 'Under Review' : 'Under Review'}</span>`
            : `<span class="status-badge in-progress">${lang === 'zh' ? '进行中' : 'In Progress'}</span>`;

        const techStackHTML = project.techStack.slice(0, 4).map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');

        return `
            <div class="project-card" data-project-id="${project.id}">
                <div class="project-card-header">
                    <div class="project-type">${type}</div>
                    ${statusBadge}
                </div>
                <div class="project-card-body">
                    <h3 class="project-card-title">${title}</h3>
                    <p class="project-card-highlight">${highlight}</p>
                    <div class="project-card-tech">
                        ${techStackHTML}
                    </div>
                    <div class="project-card-footer">
                        <span class="view-details">${lang === 'zh' ? '查看详情 →' : 'View Details →'}</span>
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
        const type = project.type[lang];
        const overview = project.overview[lang];
        const contributions = project.contributions[lang];
        const achievements = project.achievements[lang];

        const techStackHTML = project.techStack.map(tech => 
            `<span class="modal-tech-tag">${tech}</span>`
        ).join('');

        const contributionsHTML = contributions.map(contribution => 
            `<li>${contribution}</li>`
        ).join('');

        const achievementsHTML = achievements.map(achievement => 
            `<li>${achievement}</li>`
        ).join('');

        // 生成图片展示区域
        const imagesHTML = project.images && project.images.length > 0 
            ? `<div class="modal-section">
                <h3 class="modal-section-title">${lang === 'zh' ? '可视化展示' : 'Visual Section'}</h3>
                <div class="modal-images-grid">
                    ${project.images.map((img, index) => `
                        <div class="modal-image-item" data-index="${index}">
                            <img src="${img.src}" alt="${img.title[lang]}" loading="lazy">
                            <div class="modal-image-info">
                                <h4 class="modal-image-title">${img.title[lang]}</h4>
                                <p class="modal-image-caption">${img.caption[lang]}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>`
            : '';

        const githubBtn = project.github 
            ? `<a href="${project.github}" class="modal-link github" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub</span>
            </a>`
            : '';

        const paperBtn = project.paper 
            ? `<a href="${project.paper}" class="modal-link paper" download="LETI.pdf">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="12" y1="18" x2="12" y2="12"></line>
                    <line x1="9" y1="15" x2="12" y2="18"></line>
                    <line x1="15" y1="15" x2="12" y2="18"></line>
                </svg>
                <span>Paper</span>
            </a>`
            : '';

        const demoBtn = project.demo 
            ? `<a href="${project.demo}" class="modal-link demo" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                <span>${lang === 'zh' ? 'Demo' : 'Demo'}</span>
            </a>`
            : '';

        const modalHTML = `
            <div class="project-modal active" id="projectModal">
                <div class="modal-overlay"></div>
                <div class="modal-container">
                    <div class="modal-header">
                        <div class="modal-header-content">
                            <div class="modal-type">${type}</div>
                            <h2 class="modal-title">${title}</h2>
                            <div class="modal-tech-stack">
                                ${techStackHTML}
                            </div>
                            ${githubBtn || paperBtn || demoBtn ? `
                                <div class="modal-header-links">
                                    ${githubBtn}
                                    ${paperBtn}
                                    ${demoBtn}
                                </div>
                            ` : ''}
                        </div>
                        <button class="modal-close" onclick="document.getElementById('projectModal').remove()">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="modal-section">
                            <h3 class="modal-section-title">${lang === 'zh' ? '项目概述' : 'Overview'}</h3>
                            <div class="modal-overview">
                                <div class="overview-item">
                                    <strong>${lang === 'zh' ? '背景（Why）' : 'Background (Why)'}</strong>
                                    <p>${overview.background}</p>
                                </div>
                                <div class="overview-item">
                                    <strong>${lang === 'zh' ? '目标（What）' : 'Goal (What)'}</strong>
                                    <p>${overview.goal}</p>
                                </div>
                                <div class="overview-item">
                                    <strong>${lang === 'zh' ? '方法（How）' : 'Method (How)'}</strong>
                                    <p>${overview.method}</p>
                                </div>
                                <div class="overview-item">
                                    <strong>${lang === 'zh' ? '成果（Result）' : 'Result'}</strong>
                                    <p>${overview.result}</p>
                                </div>
                            </div>
                        </div>

                        <div class="modal-section">
                            <h3 class="modal-section-title">⭐ ${projectId === 2 ? (lang === 'zh' ? '我的工作' : 'My Work') : (lang === 'zh' ? '核心贡献' : 'Key Contributions')}</h3>
                            <ul class="modal-list">
                                ${contributionsHTML}
                            </ul>
                        </div>

                        ${imagesHTML}

                        <div class="modal-section">
                            <h3 class="modal-section-title">${lang === 'zh' ? '项目成果' : 'Achievements'}</h3>
                            <ul class="modal-list achievements-list">
                                ${achievementsHTML}
                            </ul>
                        </div>
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

        // 添加图片点击放大功能
        const modal = document.getElementById('projectModal');
        const imageItems = modal.querySelectorAll('.modal-image-item img');
        imageItems.forEach((img, index) => {
            img.addEventListener('click', () => {
                this.openLightbox(project.images, index);
            });
        });

        // 点击背景关闭
        const overlay = modal.querySelector('.modal-overlay');
        overlay.addEventListener('click', () => {
            modal.remove();
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

    openLightbox(images, startIndex) {
        const lang = this.currentLang;
        let currentIndex = startIndex;

        const lightboxHTML = `
            <div class="lightbox active" id="lightbox">
                <div class="lightbox-overlay"></div>
                <div class="lightbox-container">
                    <button class="lightbox-close">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                    <button class="lightbox-prev">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>
                    <button class="lightbox-next">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                    <div class="lightbox-content">
                        <img src="${images[currentIndex].src}" alt="${images[currentIndex].title[lang]}">
                        <div class="lightbox-info">
                            <h3 class="lightbox-title">${images[currentIndex].title[lang]}</h3>
                            <p class="lightbox-caption">${images[currentIndex].caption[lang]}</p>
                            <div class="lightbox-counter">${currentIndex + 1} / ${images.length}</div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', lightboxHTML);
        const lightbox = document.getElementById('lightbox');

        const updateLightbox = () => {
            const img = lightbox.querySelector('.lightbox-content img');
            const title = lightbox.querySelector('.lightbox-title');
            const caption = lightbox.querySelector('.lightbox-caption');
            const counter = lightbox.querySelector('.lightbox-counter');

            img.src = images[currentIndex].src;
            img.alt = images[currentIndex].title[lang];
            title.textContent = images[currentIndex].title[lang];
            caption.textContent = images[currentIndex].caption[lang];
            counter.textContent = `${currentIndex + 1} / ${images.length}`;
        };

        // 关闭按钮
        lightbox.querySelector('.lightbox-close').addEventListener('click', () => {
            lightbox.remove();
        });

        // 上一张
        lightbox.querySelector('.lightbox-prev').addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateLightbox();
        });

        // 下一张
        lightbox.querySelector('.lightbox-next').addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            updateLightbox();
        });

        // 点击背景关闭
        lightbox.querySelector('.lightbox-overlay').addEventListener('click', () => {
            lightbox.remove();
        });

        // 键盘导航
        const handleKeyboard = (e) => {
            if (e.key === 'Escape') {
                lightbox.remove();
                document.removeEventListener('keydown', handleKeyboard);
            } else if (e.key === 'ArrowLeft') {
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                updateLightbox();
            } else if (e.key === 'ArrowRight') {
                currentIndex = (currentIndex + 1) % images.length;
                updateLightbox();
            }
        };
        document.addEventListener('keydown', handleKeyboard);
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
