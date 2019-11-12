// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Qs from 'qs'
import '../static/cssreset.css'

import apiConfig from '../config/api.config'
// Vue.use(axios,VueAxios)
Vue.use(Qs)
Vue.config.productionTip = false
Vue.prototype.$http = function (url, fn, data = {}) {
  axios.post(url, Qs.stringify(data)).then(function (res) {
    fn(res.data)
  })
}
axios.defaults.baseURL = apiConfig.baseUrl;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  mounted () {
    // You'll need this for renderAfterDocumentEvent.
    document.dispatchEvent(new Event('render-event'))
  }
})

