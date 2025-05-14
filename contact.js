document.addEventListener('DOMContentLoaded', () => {
    const app = Vue.createApp({
        data() {
            return {
                name: '',
                email: '',
                message: '',
                userInfo: ''
            };
        },
        methods: {
            submitForm() {
                this.userInfo = `Name: ${this.name}\nEmail: ${this.email}\nMessage: ${this.message}`;
            }
        }
    });

    app.mount('#contact-form');
});