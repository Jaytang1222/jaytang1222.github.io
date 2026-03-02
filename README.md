# 个人网站 - Personal Website

一个基于纯HTML/CSS/JavaScript的简约清新风格个人网站，支持中英双语切换和主题切换。

## 功能特性

- ✨ **简约清新设计**：渐变色彩搭配，视觉效果舒适
- 🌍 **中英双语**：支持中文和英文一键切换
- 🌙 **主题切换**：浅色/深色模式自由切换
- 📱 **响应式设计**：完美适配手机、平板、桌面端
- 🖼️ **图片展示**：相册功能展示个人作品
- 📧 **联系方式**：美观的联系方式展示
- 💬 **留言板**：集成Formspree实现留言功能

## 项目结构

```
githubio/
├── index.html              # 主页
├── css/
│   ├── style.css          # 主样式文件
│   ├── themes.css         # 主题样式
│   └── responsive.css     # 响应式样式
├── js/
│   ├── main.js            # 主逻辑
│   ├── i18n.js            # 国际化（双语）
│   └── theme.js           # 主题切换
├── images/                # 图片资源
│   └── gallery/           # 相册图片
├── locales/               # 语言文件
│   ├── zh.json            # 中文
│   └── en.json            # 英文
└── README.md              # 项目说明
```

## 快速开始

### 本地预览

1. 克隆或下载此项目
2. 使用任意HTTP服务器启动项目：

**使用Python:**
```bash
python -m http.server 8000
```

**使用Node.js:**
```bash
npx http-server
```

**使用VS Code:**
- 安装Live Server插件
- 右键点击index.html，选择"Open with Live Server"

3. 在浏览器中访问 `http://localhost:8000`

## 部署到GitHub Pages

### 方法一：使用GitHub仓库

1. 在GitHub上创建新仓库（仓库名建议使用 `yourusername.github.io`）
2. 将项目文件推送到仓库的main分支
3. 进入仓库的Settings > Pages
4. 在Source中选择Deploy from a branch
5. 选择main分支和根目录
6. 点击Save
7. 等待几分钟后，访问 `https://yourusername.github.io`

### 方法二：使用GitHub Actions（推荐）

1. 在仓库中创建 `.github/workflows/deploy.yml`
2. 添加以下内容：

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

3. 推送代码后，GitHub Actions会自动部署

## 配置说明

### 修改个人信息

编辑 `index.html` 文件中的以下内容：

- 邮箱地址：修改 `your.email@example.com`
- 社交媒体链接：修改GitHub、Twitter、LinkedIn链接
- 个人介绍：在 `locales/zh.json` 和 `locales/en.json` 中修改

### 添加图片

1. 将图片文件放入 `images/gallery/` 目录
2. 编辑 `index.html` 中的相册部分，将占位符替换为实际图片：

```html
<div class="gallery-item">
    <img src="images/gallery/your-image.jpg" alt="图片描述">
</div>
```

### 配置留言板

1. 访问 [Formspree](https://formspree.io/) 注册账号
2. 创建新表单，获取Form ID
3. 编辑 `js/main.js`，将 `YOUR_FORM_ID` 替换为实际的Form ID：

```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

### 修改语言内容

编辑 `locales/zh.json` 和 `locales/en.json` 文件来自定义双语内容。

### 自定义主题颜色

编辑 `css/style.css` 中的CSS变量：

```css
:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    --accent-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}
```

## 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 技术栈

- HTML5
- CSS3 (CSS Grid, Flexbox, CSS Variables)
- JavaScript (ES6+)
- 无需任何框架或构建工具

## 许可证

MIT License

## 贡献

欢迎提交Issue和Pull Request！

## 联系方式

如有问题，请通过网站上的留言板或社交媒体联系我。
