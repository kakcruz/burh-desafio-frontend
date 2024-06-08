import 'bootstrap/dist/css/bootstrap.css';

import Vue from 'vue';
import App from './App.vue';
import store from './store';
import VeeValidate from 'vee-validate';
import VueRouter from 'vue-router';

Vue.config.productionTip = false;


Vue.use(VeeValidate, {
  classes: true,
});


new Vue({
  store,
  VueRouter,
  render: h => h(App),
}).$mount('#app');