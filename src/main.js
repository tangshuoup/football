// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './common/js/rem'
import store from './store/'
import axios from 'axios'

// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
import './common/sass/iconfont.scss'

Vue.prototype.$http = axios
Vue.config.productionTip = false
// Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
});
router.push('/index')
// store.commit('increment', 10);
// console.log(store.state.curIndex);
