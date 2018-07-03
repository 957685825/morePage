import Vue from 'vue'
import App from './test.vue'

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#test',
  template: '<App/>',
  components: { App }
})
