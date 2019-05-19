import Vue from 'vue'
import App from './App.vue'
import router from './router'
import apollo from './apolloClient' 
import { store } from './store.js'
const fb = require('./firebaseConfig.js')

Vue.config.productionTip = false
Vue.prototype.$apollo = apollo 
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')