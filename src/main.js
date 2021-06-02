import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import SVG from "./components/SVG.vue"

const app = createApp(App)
app.use(router)
app.component('SVG', SVG)

app.mount('#app')
