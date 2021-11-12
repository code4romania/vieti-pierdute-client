import { createApp } from 'vue';
import VueVirtualScroller from 'vue-virtual-scroller';

import 'tailwindcss/tailwind.css';

import App from './App.vue';
import router from './router';

createApp(App)
  .use(router)
  .use(VueVirtualScroller)
  .mount('#app');
