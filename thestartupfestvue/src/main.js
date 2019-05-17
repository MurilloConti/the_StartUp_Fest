import Vue from 'vue'
import App from './App.vue'
import router from './router'
import apollo from './apolloClient' 

Vue.config.productionTip = false
Vue.prototype.$apollo = apollo 
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')