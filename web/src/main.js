import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router'

import 'element-plus/dist/index.css'
import './assets/css/main.css'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
