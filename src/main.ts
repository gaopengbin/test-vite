import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import qq from "epsplanet-bwl"
import "epsplanet-bwl/lib/style.css"
XE.ready().then(() => {
    const app = createApp(App)

    app.use(createPinia())
    app.use(router)
    app.use(qq)

    app.mount('#app')
})

