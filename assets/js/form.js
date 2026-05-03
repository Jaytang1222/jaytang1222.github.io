class ContactForm {
    constructor() {
        this.form = document.getElementById('messageForm');
        if (!this.form) return;
        
        this.nameInput = document.getElementById('name');
        this.emailInput = document.getElementById('email');
        this.messageInput = document.getElementById('message');
        this.submitButton = this.form.querySelector('button[type="submit"]');
        
        this.formspreeUrl = 'https://formspree.io/f/xaqdkego';
        
        this.init();
    }

    init() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });

        this.setupRealtimeValidation();
    }

    setupRealtimeValidation() {
        this.nameInput.addEventListener('blur', () => this.validateName());
        this.emailInput.addEventListener('blur', () => this.validateEmail());
        this.messageInput.addEventListener('blur', () => this.validateMessage());
    }

    validateName() {
        const name = this.nameInput.value.trim();
        const errorElement = this.createErrorElement('nameError', name.length < 2 ? '姓名至少需要2个字符' : '');
        
        if (errorElement) {
            this.nameInput.parentNode.appendChild(errorElement);
            return false;
        }
        this.removeError('nameError');
        return true;
    }

    validateEmail() {
        const email = this.emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const errorElement = this.createErrorElement('emailError', 
            !emailRegex.test(email) ? '请输入有效的邮箱地址' : '');
        
        if (errorElement) {
            this.emailInput.parentNode.appendChild(errorElement);
            return false;
        }
        this.removeError('emailError');
        return true;
    }

    validateMessage() {
        const message = this.messageInput.value.trim();
        const errorElement = this.createErrorElement('messageError', 
            message.length == 0 ? '留言内容不能为空' : '');
        
        if (errorElement) {
            this.messageInput.parentNode.appendChild(errorElement);
            return false;
        }
        this.removeError('messageError');
        return true;
    }

    createErrorElement(id, message) {
        if (!message) return null;
        
        this.removeError(id);
        
        const errorDiv = document.createElement('div');
        errorDiv.id = id;
        errorDiv.className = 'form-error';
        errorDiv.textContent = message;
        
        return errorDiv;
    }

    removeError(id) {
        const existingError = document.getElementById(id);
        if (existingError) {
            existingError.remove();
        }
    }

    async handleSubmit() {
        if (!this.validateForm()) {
            return;
        }

        const formData = new FormData(this.form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };

        this.setLoading(true);

        try {
            const response = await fetch(this.formspreeUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                this.showSuccess('留言发送成功！感谢您的联系。');
                this.form.reset();
            }
        } catch (error) {
            console.error('Error:', error);
            this.showError('发送失败，请检查网络连接。');
        } finally {
            this.setLoading(false);
        }
    }

    validateForm() {
        const isNameValid = this.validateName();
        const isEmailValid = this.validateEmail();
        const isMessageValid = this.validateMessage();
        
        return isNameValid && isEmailValid && isMessageValid;
    }

    setLoading(isLoading) {
        if (isLoading) {
            this.submitButton.textContent = '发送中...';
            this.submitButton.disabled = true;
            this.submitButton.classList.add('loading');
        } else {
            this.submitButton.textContent = '发送';
            this.submitButton.disabled = false;
            this.submitButton.classList.remove('loading');
        }
    }

    showSuccess(message) {
        this.showNotification(message, 'success');
    }

    showError(message) {
        this.showNotification(message, 'error');
    }

    showNotification(message, type) {
        const existingNotification = document.getElementById('formNotification');
        if (existingNotification) {
            existingNotification.remove();
        }

        const notification = document.createElement('div');
        notification.id = 'formNotification';
        notification.className = `form-notification ${type}`;
        notification.textContent = message;

        this.form.parentNode.insertBefore(notification, this.form);

        setTimeout(() => {
            notification.classList.add('show');
        }, 10);

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ContactForm();
});