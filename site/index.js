import Vue from 'vue';
import entry from './app';
import VueRouter from 'vue-router';
import PrinterCmpt from 'main/index.js';
import routes from './route.config';
import phoneCase from './compt/phone-case.vue';
import 'highlight.js/styles/atom-one-light.css';
import 'github-markdown-css';
Vue.use(PrinterCmpt);
Vue.use(VueRouter);
Vue.component('phone-case', phoneCase);
const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes
});
new Vue({ // eslint-disable-line
  render: h => h(entry),
  router
}).$mount('#app');
