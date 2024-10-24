import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$axios = axios; //Global axios

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
