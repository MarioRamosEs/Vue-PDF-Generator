import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'

import VueHtml2Canvas from 'vue-html2canvas';
Vue.use(VueHtml2Canvas);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')