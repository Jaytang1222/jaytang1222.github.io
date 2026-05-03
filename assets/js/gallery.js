class Gallery {
    constructor() {
        this.lightbox = document.getElementById('lightbox');
        this.lightboxImage = document.getElementById('lightboxImage');
        this.lightboxClose = document.getElementById('lightboxClose');
        this.lightboxPrev = document.getElementById('lightboxPrev');
        this.lightboxNext = document.getElementById('lightboxNext');
        this.galleryItems = document.querySelectorAll('.gallery-item');
        this.currentIndex = 0;
        this.images = [];
        
        this.init();
    }

    init() {
        this.loadImages();
        this.setupEventListeners();
    }

    loadImages() {
        this.images = Array.from(this.galleryItems).map(item => {
            const img = item.querySelector('img');
            return {
                src: img ? img.getAttribute('src') : ''
            };
        }).filter(item => item.src);
    }

    setupEventListeners() {
        // 相册项点击事件
        this.galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                this.openLightbox(index);
            });
        });

        // 关闭按钮
        this.lightboxClose.addEventListener('click', () => {
            this.closeLightbox();
        });

        // 灯箱点击关闭
        this.lightbox.addEventListener('click', (e) => {
            if (e.target === this.lightbox) {
                this.closeLightbox();
            }
        });

        // 上一张/下一张按钮
        this.lightboxPrev.addEventListener('click', () => {
            this.showPrevious();
        });

        this.lightboxNext.addEventListener('click', () => {
            this.showNext();
        });

        // 键盘导航
        document.addEventListener('keydown', (e) => {
            if (!this.lightbox.classList.contains('active')) return;

            switch (e.key) {
                case 'Escape':
                    this.closeLightbox();
                    break;
                case 'ArrowLeft':
                    this.showPrevious();
                    break;
                case 'ArrowRight':
                    this.showNext();
                    break;
            }
        });
    }

    openLightbox(index) {
        this.currentIndex = index;
        this.updateLightboxContent();
        this.lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeLightbox() {
        this.lightbox.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => {
            this.lightboxImage.src = '';
        }, 300);
    }

    updateLightboxContent() {
        const image = this.images[this.currentIndex];
        
        if (image && image.src) {
            this.lightboxImage.src = image.src;
        }
    }

    showPrevious() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateLightboxContent();
        } else {
            // 循环到最后一张
            this.currentIndex = this.images.length - 1;
            this.updateLightboxContent();
        }
    }

    showNext() {
        if (this.currentIndex < this.images.length - 1) {
            this.currentIndex++;
            this.updateLightboxContent();
        } else {
            // 循环到第一张
            this.currentIndex = 0;
            this.updateLightboxContent();
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Gallery();
});