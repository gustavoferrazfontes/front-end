import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './registerServiceWorker'
import './styles/index.scss'

import CurrencyIcon from "@/components/CurrencyIcon";
import Modal from "@/components/Modal";

Vue.config.productionTip = false

Vue.component("CurrencyIcon", CurrencyIcon)
Vue.component("Modal", Modal)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
