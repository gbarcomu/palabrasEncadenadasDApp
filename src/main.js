// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Web3 from "web3";

Vue.config.productionTip = false

/* eslint-disable no-new */

window.addEventListener('load', () => {
    web3 = new Web3(web3.currentProvider);
})

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
