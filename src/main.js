import Vue from 'vue'
import App from './App.vue'
import router from './router'


Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
new Vue({
  render: h => h(App),
  router
}).$mount('#app')

import Router from 'vue-router'
const VueRouterPush = Router.prototype.push 
Router.prototype.push = function push (location) {
    return VueRouterPush.call(this, location).catch(err => err)
}