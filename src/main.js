import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store.js'

import './registerServiceWorker'
import './styles/index.scss'

import CurrencyIcon from "@/components/CurrencyIcon";
import CloseIcon from "@/components/CloseIcon";
import HamburgerIcon from "@/components/HamburgerIcon";
import Modal from "@/components/Modal";
import eventhub from "./eventhub"

Vue.config.productionTip = false

Vue.component("CurrencyIcon", CurrencyIcon)
Vue.component("CloseIcon", CloseIcon)
Vue.component("HamburgerIcon", HamburgerIcon)
Vue.component("Modal", Modal)

Vue.prototype.$eventhub = eventhub

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
