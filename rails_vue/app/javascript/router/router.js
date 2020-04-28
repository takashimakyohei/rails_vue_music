import Vue          from 'vue'
import VueRouter    from 'vue-router'
import MusicHome     from '../pages/MusicHome.vue'
import MusicCreate     from '../pages/MusicCreate.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/',  name: 'MusicHome', component: MusicHome },
  { path: '/create',  name: 'MusicCreate', component: MusicCreate },
];

export default new VueRouter({ routes });