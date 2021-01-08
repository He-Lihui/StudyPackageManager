/*
 * @Descripttion: 
 * @version: 
 * @Author: helihui
 * @Date: 2021-01-08 14:33:15
 * @LastEditors: helihui
 * @LastEditTime: 2021-01-08 15:21:32
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/reset.css'

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
