import Vue from 'vue';
import entry from './app';
import VueRouter from 'vue-router';
import PrinterCmpt from 'main/index.js';
import routes from './route.config';
Vue.use(PrinterCmpt);
Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes
});
new Vue({ // eslint-disable-line
  render: h => h(entry),
  router
}).$mount('#app');
