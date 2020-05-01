import Vue from 'vue'
import App from './App.vue'
import Router from '../router/router.js'
// import VuePaginate from 'vue-paginate';
// Vue.use(VuePaginate);

const app = new Vue({
   el: '#app',
   router:Router,
   render: h => h(App)
})