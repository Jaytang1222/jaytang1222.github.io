class AudioPlayer {
    constructor() {
        this.audio = document.getElementById('bgMusic');
        this.audioToggle = document.getElementById('audioToggle');
        this.volumeSlider = document.getElementById('volumeSlider');
        this.songTitle = document.querySelector('.song-title');
        this.songArtist = document.querySelector('.song-artist');
        this.isPlaying = false;
        this.volume = 0.3; // 默认音量30%
        
        // 歌曲信息配置
        this.songInfo = {
            zh: {
                title: "The Snowbird Strut",
                artist: "Jesse Gallagher"
            },
            en: {
                title: "The Snowbird Strut", 
                artist: "Jesse Gallagher"
            }
        };
        
        this.init();
    }

    init() {
        // 设置默认音量
        this.audio.volume = this.volume;
        this.volumeSlider.value = this.volume * 100;
        
        // 更新歌曲信息显示
        this.updateSongInfo();
        
        // 从localStorage读取用户偏好
        const savedVolume = localStorage.getItem('audioVolume');
        const savedPlaying = localStorage.getItem('audioPlaying');
        
        if (savedVolume !== null) {
            this.volume = parseFloat(savedVolume);
            this.audio.volume = this.volume;
            this.volumeSlider.value = this.volume * 100;
        }
        
        if (savedPlaying === 'true') {
            this.isPlaying = true;
            this.audioToggle.classList.add('playing');
        }
        
        this.setupEventListeners();
        this.setupAutoPlay();
    }

    updateSongInfo() {
        const currentLang = localStorage.getItem('lang') || 'zh';
        const info = this.songInfo[currentLang];
        
        if (this.songTitle) {
            this.songTitle.textContent = info.title;
        }
        if (this.songArtist) {
            this.songArtist.textContent = info.artist;
        }
    }

    setupEventListeners() {
        // 播放/暂停按钮
        this.audioToggle.addEventListener('click', () => {
            this.togglePlay();
            this.updateButtonTitle();
        });

        // 音量控制
        this.volumeSlider.addEventListener('input', (e) => {
            this.setVolume(e.target.value / 100);
        });

        // 音频加载完成后的处理
        this.audio.addEventListener('loadeddata', () => {
            if (this.isPlaying) {
                this.play();
            }
        });

        // 音频播放结束
        this.audio.addEventListener('ended', () => {
            this.isPlaying = false;
            this.audioToggle.classList.remove('playing');
            localStorage.setItem('audioPlaying', 'false');
            this.updateButtonTitle();
        });

        // 监听语言切换
        document.addEventListener('languageChanged', () => {
            this.updateSongInfo();
            this.updateButtonTitle();
        });
    }

    updateButtonTitle() {
        const playText = this.getTranslation('audio.play');
        const pauseText = this.getTranslation('audio.pause');
        this.audioToggle.title = this.isPlaying ? pauseText : playText;
    }

    getTranslation(key) {
        // 获取当前语言的翻译
        const currentLang = localStorage.getItem('lang') || 'zh';
        const translations = currentLang === 'zh' ? 
            { 'audio.play': '播放音乐', 'audio.pause': '暂停音乐' } : 
            { 'audio.play': 'Play Music', 'audio.pause': 'Pause Music' };
        return translations[key] || key;
    }

    setupAutoPlay() {
        // 现代浏览器需要用户交互才能播放音频
        // 监听第一次用户交互来尝试自动播放
        const tryAutoPlay = () => {
            if (this.isPlaying) {
                this.play().catch(error => {
                    console.log('自动播放被阻止:', error);
                    // 如果自动播放失败，重置状态
                    this.isPlaying = false;
                    this.audioToggle.classList.remove('playing');
                    localStorage.setItem('audioPlaying', 'false');
                });
            }
            // 移除监听器，只尝试一次
            document.removeEventListener('click', tryAutoPlay);
            document.removeEventListener('touchstart', tryAutoPlay);
        };

        document.addEventListener('click', tryAutoPlay);
        document.addEventListener('touchstart', tryAutoPlay);
    }

    togglePlay() {
        if (this.isPlaying) {
            this.pause();
        } else {
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
            alert('音频播放失败，请检查浏览器权限设置。');
        }
    }

    pause() {
        this.audio.pause();
        this.isPlaying = false;
        this.audioToggle.classList.remove('playing');
        localStorage.setItem('audioPlaying', 'false');
    }

    setVolume(volume) {
        this.volume = Math.max(0, Math.min(1, volume));
        this.audio.volume = this.volume;
        this.volumeSlider.value = this.volume * 100;
        localStorage.setItem('audioVolume', this.volume);
    }

    // 公共方法
    getVolume() {
        return this.volume;
    }

    isAudioPlaying() {
        return this.isPlaying;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new AudioPlayer();
});