import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'
import generatedRouters from '~pages'

import '@unocss/reset/tailwind.css'
import '@/styles/main.scss'
import 'uno.css'

const app = createApp(App)
const routes = setupLayouts(generatedRouters)
const router = createRouter({
  routes,
  history: createWebHashHistory(),
})
app.use(router)
app.mount('#app')

Object.values(import.meta.globEager('./modules/*.ts')).forEach(i => {
  i.install?.({ app, routes, router })
})
