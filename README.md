# 个人网站 - Personal Website

一个基于纯 HTML/CSS/JavaScript 的现代个人网站，采用简约清新设计风格，支持中英双语切换和主题切换，提供完整的个人作品展示和联系方式。

## ✨ 功能特性

### 🎨 设计与视觉
- **简约清新设计**：渐变色彩搭配，视觉效果舒适
- **响应式布局**：完美适配手机、平板、桌面端
- **动画效果**：流畅的页面过渡和交互动画
- **灯箱相册**：专业的图片展示效果，支持键盘导航

### 🌍 国际化支持
- **中英双语切换**：一键切换中文/英文界面
- **语言持久化**：自动保存用户语言偏好
- **完整的翻译支持**：所有界面元素均支持双语

### 🎨 主题系统
- **浅色/深色模式**：支持主题自由切换
- **主题持久化**：自动保存用户主题偏好
- **平滑过渡**：主题切换无闪烁

### 🎵 多媒体功能
- **背景音乐播放器**：固定底部音频播放器
- **音量控制**：支持音量调节
- **播放/暂停控制**：便捷的播放控制
- **状态持久化**：自动保存播放状态和音量

### � 交互功能
- **联系表单**：集成 Formspree 实现留言功能
- **表单验证**：前端实时验证，提升用户体验
- **社交链接**：展示 GitHub、小红书、Stack Overflow 等社交平台
- **项目展示**：网格布局展示个人项目

### 🚀 性能优化
- **懒加载图片**：图片延迟加载，提升页面加载速度
- **优化的动画**：使用 CSS transform 实现高性能动画
- **精简的代码**：无第三方依赖，加载速度快

## 🛠️ 技术栈

### 前端技术
- **HTML5**：语义化标签，SEO 友好
- **CSS3**：
  - CSS Grid 和 Flexbox 布局
  - CSS 变量（Custom Properties）
  - CSS 动画和过渡
  - 响应式设计（Media Queries）
- **JavaScript (ES6+)**：
  - 面向对象编程（Classes）
  - 异步编程（Async/Await）
  - 模块化设计
  - 本地存储（LocalStorage）

### 开发工具
- 无需构建工具
- 无需框架（React/Vue/Angular）
- 纯原生实现

## 📁 项目结构

```
githubio/
├── index.html                    # 主页入口文件
├── README.md                     # 项目说明文档
├── css/
│   ├── style.css                 # 主样式文件（1169 行）
│   ├── themes.css                # 主题样式（深色/浅色）
│   └── responsive.css            # 响应式样式（移动端适配）
├── js/
│   ├── main.js                   # 主逻辑（导航滚动）
│   ├── i18n.js                   # 国际化（双语切换）
│   ├── theme.js                  # 主题切换管理
│   ├── audio.js                  # 音频播放器
│   ├── gallery.js                # 相册灯箱
│   ├── form.js                   # 联系表单处理
│   └── projects.js               # 项目数据
├── locales/
│   ├── zh.json                   # 中文语言包
│   └── en.json                   # 英文语言包
├── images/
│   ├── personal-image.jpg        # 个人头像
│   ├── photo1.jpg ~ photo8.jpg   # 相册图片
│   └── projects/                 # 项目图片（需创建）
│       ├── project1.jpg
│       ├── project2.jpg
│       └── project3.jpg
└── audio/
    └── background-music.mp3      # 背景音乐
```

## 🚀 快速开始

### 本地预览

#### 方法一：使用 Python（推荐）

```bash
# Python 3
python -m http.server 8000

# 访问 http://localhost:8000
```

#### 方法二：使用 Node.js

```bash
# 安装 http-server（全局）
npm install -g http-server

# 启动服务器
http-server -p 8000

# 访问 http://localhost:8000
```

#### 方法三：使用 VS Code

1. 安装 [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) 插件
2. 右键点击 `index.html`
3. 选择 "Open with Live Server"

#### 方法四：使用 PHP

```bash
php -S localhost:8000

# 访问 http://localhost:8000
```

### 浏览器支持

- ✅ Chrome (最新版)
- ✅ Firefox (最新版)
- ✅ Safari (最新版)
- ✅ Edge (最新版)
- ✅ Opera (最新版)

## 📝 配置说明

### 修改个人信息

#### 1. 编辑语言文件

**中文内容** - `locales/zh.json`：
```json
{
    "hero": {
        "title": "你好，我是Jay",
        "subtitle": "欢迎来到我的空间"
    },
    "about": {
        "description": "重庆大学2024级计算机科学与技术卓越班在读",
        "experience": "重庆大学START时空实验室成员..."
    }
}
```

**英文内容** - `locales/en.json`：
```json
{
    "hero": {
        "title": "Hi, I'm Jay",
        "subtitle": "Welcome to my space"
    },
    "about": {
        "description": "Chongqing University Class of 2024...",
        "experience": "Member of Chongqing University START..."
    }
}
```

#### 2. 修改联系方式

在 `index.html` 中修改：

```html
<!-- 邮箱地址 -->
<p>jaytang12221@outlook.com</p>

<!-- 社交媒体链接 -->
<a href="https://github.com/Jaytang1222" target="_blank">GitHub</a>
<a href="https://www.xiaohongshu.com/user/profile/..." target="_blank">XHS</a>
<a href="https://stackoverflow.com/users/32415781/..." target="_blank">Stack Overflow</a>
```

#### 3. 添加项目

编辑 `js/projects.js` 文件：

```javascript
const projectsData = [
    {
        id: 1,
        title: {
            zh: "项目名称",
            en: "Project Name"
        },
        description: {
            zh: "项目描述",
            en: "Project description in English"
        },
        techStack: ["技术1", "技术2", "技术3"],
        image: "images/projects/project1.jpg",
        github: "https://github.com/username/repo",
        demo: "https://yourwebsite.com/project"
    }
];
```

### 配置背景音乐

编辑 `js/audio.js` 中的歌曲信息：

```javascript
this.songInfo = {
    zh: {
        title: "歌曲名称",
        artist: "艺术家名称"
    },
    en: {
        title: "Song Title",
        artist: "Artist Name"
    }
};
```

### 配置 Formspree 表单

1. 访问 [Formspree](https://formspree.io/) 注册账号
2. 创建新表单，获取 Form ID
3. 编辑 `js/form.js`，替换 Formspree URL：

```javascript
this.formspreeUrl = 'https://formspree.io/f/YOUR_FORM_ID';
```

**注意**：当前项目已配置 Formspree URL 为 `https://formspree.io/f/xaqdkego`

### 自定义主题颜色

编辑 `css/style.css` 中的 CSS 变量：

```css
:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    --accent-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    
    --bg-light: #ffffff;
    --bg-dark: #1a1a2e;
    --text-light: #333333;
    --text-dark: #e0e0e0;
    --card-light: #f8f9fa;
    --card-dark: #16213e;
    --border-light: #e0e0e0;
    --border-dark: #2a2a4a;
}
```

## 🚢 部署到 GitHub Pages

### 方法一：使用 GitHub 仓库（推荐）

1. **创建 GitHub 仓库**
   - 仓库名建议使用：`yourusername.github.io`
   - 或者使用任意名称，配置自定义域名

2. **推送代码**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```

3. **配置 GitHub Pages**
   - 进入仓库的 `Settings` > `Pages`
   - 在 `Source` 中选择 `Deploy from a branch`
   - 选择 `main` 分支和 `/ (root)` 目录
   - 点击 `Save`

4. **等待部署完成**
   - 等待几分钟后，访问 `https://yourusername.github.io`

### 方法二：使用 GitHub Actions（自动化部署）

1. **创建工作流文件**
   ```bash
   mkdir -p .github/workflows
   touch .github/workflows/deploy.yml
   ```

2. **添加以下内容** - `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: .
```

3. **推送代码**
   ```bash
   git add .github/workflows/deploy.yml
   git commit -m "Add GitHub Actions workflow"
   git push
   ```

4. **自动部署**
   - GitHub Actions 会自动部署到 GitHub Pages
   - 访问 `https://yourusername.github.io`

### 方法三：使用自定义域名

1. **在仓库设置中配置**
   - `Settings` > `Pages`
   - 在 `Custom domain` 中输入您的域名
   - 勾选 `Enforce HTTPS`

2. **配置 DNS**
   - A 记录：指向 `185.199.108.153`
   - AAAA 记录：指向 `2606:50c0:8000::153`
   - 或使用 CNAME 记录指向 `yourusername.github.io`

3. **等待生效**
   - DNS 解析可能需要几分钟到几小时

## 🎯 页面 sections

### 1. 首页 (Hero)
- 个人头像（带旋转光晕效果）
- 简短自我介绍
- CTA 按钮跳转到关于部分

### 2. 关于我 (About)
- 个人基本信息
- 教育背景
- 技术技能标签

### 3. 技术栈 (Tech Stack)
- 嵌入式开发（STM32、Keil 5）
- 硬件设计（PCB、Proteus）
- 软件与工具（C++、Linux、Git、WSL）

### 4. 个人项目 (Projects)
- 项目网格展示
- 项目图片、描述、技术栈
- GitHub 和演示链接

### 5. 相册 (Gallery)
- 8 张展示图片
- 点击查看大图
- 灯箱效果支持键盘导航

### 6. 联系我 (Contact)
- 联系信息（邮箱、地址、社交媒体）
- 留言表单（Formspree 集成）

## 🎨 设计亮点

### 动画效果
- **旋转光晕**：头像周围的三层旋转光晕
- **悬停效果**：卡片和按钮的悬停动画
- **淡入动画**：页面加载时的元素淡入
- **平滑滚动**：导航链接的平滑滚动

### 交互体验
- **语言切换**：点击右上角切换中英文
- **主题切换**：点击太阳/月亮图标切换主题
- **音频控制**：底部音频播放器，支持播放/暂停/音量控制
- **表单验证**：实时验证，友好的错误提示

### 响应式设计
- **桌面端**（> 992px）：多列布局
- **平板端**（768px - 992px）：自适应布局
- **移动端**（< 768px）：单列布局，优化触摸体验
- **小屏幕**（< 480px）：进一步优化布局

## 📊 性能指标

- **无第三方依赖**：纯原生实现
- **快速加载**：优化的资源加载
- **懒加载图片**：减少初始加载时间
- **精简 CSS/JS**：无冗余代码

## 🔧 开发指南

### 添加新功能

1. **添加新页面 section**
   - 在 `index.html` 中添加 section
   - 在 `css/style.css` 中添加样式
   - 在 `js/main.js` 中添加逻辑

2. **添加新语言支持**
   - 在 `locales/` 中创建新语言文件
   - 在 `i18n.js` 中添加语言切换逻辑

3. **添加新主题**
   - 在 `css/themes.css` 中添加主题变量
   - 在 `theme.js` 中添加主题切换逻辑

### 代码规范

- **HTML**：语义化标签，良好的缩进
- **CSS**：使用 CSS 变量，遵循 BEM 命名规范
- **JavaScript**：使用 ES6+ 语法，类结构清晰

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📧 联系方式

如有问题，请通过以下方式联系我：
- 邮箱：jaytang12221@outlook.com
- GitHub：[@Jaytang1222](https://github.com/Jaytang1222)
- 小红书：[@JayTang](https://www.xiaohongshu.com/user/profile/...)
- Stack Overflow：[@Jay Tang](https://stackoverflow.com/users/32415781/jay-tang)

## 🙏 致谢

- 感谢使用 [Formspree](https://formspree.io/) 提供表单服务
- 感谢使用 [FontAwesome](https://fontawesome.com/) 图标（本项目使用 SVG 内联）
- 感谢开源社区提供的各种资源

---

**© 2024 JayTang | 个人主页**. 保留所有权利.
