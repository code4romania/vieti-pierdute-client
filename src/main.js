import { createApp } from "vue";

import VueVirtualScroller from "vue-virtual-scroller"
import VueGtag from "vue-gtag";

import "tailwindcss/tailwind.css";

import App from "./App.vue"
import router from "./router"

createApp(App)
  .use(router)
  .use(VueVirtualScroller)
  .use(VueGtag, {
    appName: "vieti-pierdute",
    pageTrackerScreenviewEnabled: true,
    pageTrackerTemplate(to) {
      return {
        page_title: to.name + ' ' + to.path,
        page_path: to.path
      }
    },
    config: {
      id: process.env.VUE_APP_ANALYTICS_MEASUREMENT_ID
    }
  }, router)
  .mount("#app")
