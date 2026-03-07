# Firebase 配置指南

本指南将帮助您完成 Firebase Realtime Database 的配置，以实现访问统计功能。

## 📋 配置步骤

### 第一步：创建 Firebase 项目

1. 访问 [Firebase Console](https://console.firebase.google.com/)
2. 点击 "添加项目" 或 "Add project"
3. 输入项目名称（例如：`jaytang-website`）
4. 按照向导完成项目创建

### 第二步：启用 Realtime Database

1. 在 Firebase 控制台中，点击 "Build" → "Realtime Database"
2. 点击 "创建数据库" 或 "Create database"
3. 选择数据库位置（推荐选择 `asia-east1` 亚洲东部）
4. 选择安全规则模式：
   - **测试模式**（推荐开始时使用）：允许读写，适合开发阶段
   - **锁定模式**：禁止读写，适合生产环境
5. 点击 "启用" 或 "Enable"

### 第三步：注册 Web 应用

1. 在项目概览页面，点击 "项目设置" ⚙️
2. 选择 "常规" 标签
3. 向下滚动到 "您的应用" 部分
4. 点击 "Web 应用" 图标 `< >`
5. 注册应用：
   - 输入应用昵称（例如：`JayTang Website`）
   - 勾选 "设置 Firebase Hosting"（可选）
   - 点击 "注册应用"
6. 复制配置信息，格式如下：

```javascript
const firebaseConfig = {
    apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    authDomain: "jaytang-website.firebaseapp.com",
    databaseURL: "https://jaytang-website-default-rtdb.firebaseio.com",
    projectId: "jaytang-website",
    storageBucket: "jaytang-website.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abcdef1234567890"
};
```

### 第四步：配置 Firebase

1. 打开项目中的 `js/firebase-config.js` 文件
2. 将复制的配置信息填入 `firebaseConfig` 对象中：

```javascript
const firebaseConfig = {
    apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    authDomain: "jaytang-website.firebaseapp.com",
    databaseURL: "https://jaytang-website-default-rtdb.firebaseio.com",
    projectId: "jaytang-website",
    storageBucket: "jaytang-website.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abcdef1234567890"
};
```

3. 保存文件

### 第五步：配置安全规则（可选）

当网站上线后，建议配置更严格的安全规则：

1. 在 Firebase 控制台中，选择 "Realtime Database"
2. 点击 "规则" 标签
3. 将规则替换为以下内容：

```json
{
  "rules": {
    "visitorCount": {
      ".read": "true",
      ".write": "true"
    }
  }
}
```

4. 点击 "发布" 或 "Publish"

## 🔍 验证配置

### 方法 1：检查浏览器控制台

1. 打开浏览器开发者工具（F12）
2. 切换到 Console 标签
3. 访问网站
4. 应该看到：
   - 无 Firebase 相关错误
   - 访问计数器正常显示

### 方法 2：检查 Firebase 控制台

1. 打开 Firebase 控制台
2. 选择您的项目
3. 进入 "Realtime Database"
4. 应该看到 `visitorCount` 节点，包含 `home` 子节点
5. `home` 节点的值应该是访问量数字

### 方法 3：测试访问量增加

1. 访问网站
2. 刷新页面
3. 在 Firebase 控制台中查看 `visitorCount/home` 的值
4. 每次刷新应该增加 1

## 🐛 故障排除

### 问题 1：Firebase 未配置

**错误信息**：`Firebase 未配置，请在 js/firebase-config.js 中填写配置信息`

**解决方案**：
1. 检查 `js/firebase-config.js` 文件
2. 确保已填写正确的配置信息
3. 确保 `apiKey` 和 `projectId` 不是默认值

### 问题 2：网络请求失败

**错误信息**：`获取访问量失败: [错误信息]`

**解决方案**：
1. 检查网络连接
2. 检查 Firebase 数据库 URL 是否正确
3. 检查安全规则是否允许读写

### 问题 3：权限错误

**错误信息**：`PERMISSION_DENIED`

**解决方案**：
1. 检查 Firebase 安全规则
2. 确保规则允许读写操作
3. 暂时切换到测试模式进行调试

## 📊 数据结构

Firebase Realtime Database 中的数据结构如下：

```
visitorCount
└── home: 123
```

- `visitorCount`：根节点
- `home`：页面标识（主页）
- `123`：访问量数字

## 🎯 配置完成

完成以上步骤后，访问统计功能应该可以正常工作了！

- ✅ 每次访问都会增加计数
- ✅ 计数实时同步到 Firebase
- ✅ 可以在 Firebase 控制台查看数据
- ✅ 支持跨设备统计

## 📞 需要帮助？

如果遇到问题，请检查：
1. Firebase 项目是否正确创建
2. 配置信息是否正确填写
3. 网络连接是否正常
4. 浏览器控制台是否有错误信息
