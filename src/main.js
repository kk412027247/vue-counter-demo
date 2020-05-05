import Vue from 'vue'
import Counter from './Counter'
import store from './store'

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(Counter)
}).$mount('#app');
