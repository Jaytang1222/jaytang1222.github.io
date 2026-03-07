// Firebase 配置
// 请在 Firebase 控制台创建项目后，填写以下配置信息
// 详细配置步骤请参考：https://console.firebase.google.com/

const firebaseConfig = {
    apiKey: "AIzaSyDJjywoJoKoXGbkIizS--sU6WsF2wYPQzA",
    authDomain: "personal-website-1222.firebaseapp.com",
    databaseURL: "https://personal-website-1222-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "personal-website-1222",
    storageBucket: "personal-website-1222.firebasestorage.app",
    messagingSenderId: "550173267965",
    appId: "1:550173267965:web:20ea98a8629105b8c72b94",
    measurementId: "G-MCSLDTLB3F"
};

// 检查配置是否已设置
function isFirebaseConfigured() {
    return firebaseConfig.apiKey !== "AIzaSyDJjywoJoKoXGbkIizS--sU6WsF2wYPQzA" && 
           firebaseConfig.projectId !== "personal-website-1222";
}
