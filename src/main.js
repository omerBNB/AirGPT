import { createApp } from 'vue'

import { router } from './router.js'
import { store } from './store/store.js'

import './assets/styles/setup/_typography.scss'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import VCalendar from 'v-calendar';
import 'v-calendar/style.css';

// Use plugin with optional defaults


import './assets/styles/main.scss'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
app.use(VCalendar, {})
app.mount('#app')
