import Vue from 'vue'
import App from './App'
import router from './router'
import lang from '@/lang/lang.js'
import VueI18n from 'vue-i18n'
import Url from '@/api/url.js'

Vue.config.productionTip = false
Vue.use(VueI18n)

const VueScrollTo = require('vue-scrollto')
Vue.use(VueScrollTo)

const i18n = new VueI18n(lang)

Vue.prototype.$url = Url

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  render: h => h(App)
})
