import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
// eslint-disable-next-line no-unused-vars
import axios from 'axios'
// 配置axios全局使用
Vue.prototype.$axios = axios
// 配置基地址
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/'

Vue.use(Element)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
