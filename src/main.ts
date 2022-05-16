import { createApp } from 'vue'
import App from './App.vue'

import '@/styles/main.scss'
import 'virtual:windi.css'

const app = createApp(App)
app.mount('#app')

Object.values(import.meta.globEager('./modules/*.ts')).forEach(i => {
  i.install?.({ app })
})
