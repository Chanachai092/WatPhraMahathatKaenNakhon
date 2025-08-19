import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // ถ้าใช้ router

const app = createApp(App)
app.use(router) // ถ้ามี router
app.mount('#app')
