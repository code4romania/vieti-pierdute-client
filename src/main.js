import { createApp } from 'vue'
import { VueReCaptcha } from 'vue-recaptcha-v3'
import VueVirtualScroller from 'vue-virtual-scroller'

import 'tailwindcss/tailwind.css'

import App from './App.vue'
import router from './router'

createApp(App)
  .use(router)
  .use(VueVirtualScroller)
  .use(VueReCaptcha, { siteKey: process.env.VUE_APP_SITE_KEY_RECAPTCHA })
  .mount('#app')
