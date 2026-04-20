import { createApp } from 'vue'
import './assets/css/main.css'
import App from './App.vue'
import { i18n } from './plugins/i18n.js'

// Always start at the top on page load / reload
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}
window.scrollTo({ top: 0, left: 0, behavior: 'instant' })

createApp(App).use(i18n).mount('#app')
