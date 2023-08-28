import Vue from 'vue';
import './assets/styles/reset.css';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
