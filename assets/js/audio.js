/**
 * 简洁音乐播放器 - 默认静音
 */
class AudioPlayer {
    constructor() {
        this.audio = document.getElementById('bgMusic');
        this.audioToggle = document.getElementById('audioToggle');
        this.isPlaying = false;
        this.volume = 0; // 默认静音
        
        this.init();
    }

    init() {
        // 设置默认音量为0（静音）
        this.audio.volume = this.volume;
        
        // 从localStorage读取用户偏好
        const savedVolume = localStorage.getItem('audioVolume');
        const savedPlaying = localStorage.getItem('audioPlaying');
        
        if (savedVolume !== null) {
            this.volume = parseFloat(savedVolume);
            this.audio.volume = this.volume;
        }
        
        // 默认不自动播放
        if (savedPlaying === 'true') {
            this.isPlaying = true;
            this.audioToggle.classList.add('playing');
        }
        
        this.setupEventListeners();
    }

    setupEventListeners() {
        // 播放/暂停按钮
        this.audioToggle.addEventListener('click', () => {
            this.togglePlay();
        });

        // 音频播放结束
        this.audio.addEventListener('ended', () => {
            this.isPlaying = false;
            this.audioToggle.classList.remove('playing');
            localStorage.setItem('audioPlaying', 'false');
        });

        // 音频加载完成
        this.audio.addEventListener('loadeddata', () => {
            if (this.isPlaying) {
                this.play();
            }
        });
    }

    togglePlay() {
        if (this.isPlaying) {
            this.pause();
        } else {
            // 首次播放时设置音量为30%
            if (this.volume === 0) {
                this.volume = 0.3;
                this.audio.volume = this.volume;
                localStorage.setItem('audioVolume', this.volume);
            }
            this.play();
        }
    }

    async play() {
        try {
            await this.audio.play();
            this.isPlaying = true;
            this.audioToggle.classList.add('playing');
            localStorage.setItem('audioPlaying', 'true');
        } catch (error) {
            console.error('播放失败:', error);
            this.isPlaying = false;
            this.audioToggle.classList.remove('playing');
        }
    }

    pause() {
        this.audio.pause();
        this.isPlaying = false;
        this.audioToggle.classList.remove('playing');
        localStorage.setItem('audioPlaying', 'false');
    }
}

// 初始化音频播放器
document.addEventListener('DOMContentLoaded', () => {
    new AudioPlayer();
});
