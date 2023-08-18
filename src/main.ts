import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import LGUI from "laogao-test-ui"
import "laogao-test-ui/lib/style.css"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(LGUI)

app.mount('#app')
