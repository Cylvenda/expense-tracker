import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import routers from "./routes/index"
import './style.css'

const app = createApp(App)


app.use(createPinia())
app.use(routers)
app.mount('#app')
