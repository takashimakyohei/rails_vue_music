import Vue from "vue";
// import VueRouter from "vue-router";
import VueRouter from "vue-router";
import MusicHome from "../pages/MusicHome.vue";
import MusicCreate from "../pages/MusicCreate.vue";
import MusicEdit from "../pages/MusicEdit.vue";
import MusicSearch from "../pages/MusicSearch.vue";
import MusicSearchResult from "../pages/MusicSearchResult.vue";
import SignUp from "../pages/SignUp.vue";
import SignIn from "../pages/SignIn.vue";
import firebase from '../plugins/firebase'

Vue.use(VueRouter);


const routes = [  

  { path: "/", name: "MusicHome",meta: { requiresAuth: true }, component: MusicHome },
  { path: "/create", name: "MusicCreate",meta: { requiresAuth: true }, component: MusicCreate },
  { path: "/edit/:id", name: "MusicEdit",meta: { requiresAuth: true }, component: MusicEdit },
  { path: "/search", name: "MusicSearch",meta: { requiresAuth: true }, component: MusicSearch },
  {
    path: "/result/:keyword",
    name: "MusicSearchResult",meta: { requiresAuth: true },
    component: MusicSearchResult,
  },
  { path: "/signup", name: "signup", component: SignUp },
  { path: "/signin", name: "signin", component: SignIn },
];

const router = new VueRouter({
  routes // `routes: routes` の短縮表記
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        next()
      } else {
        next({
          path: '/signin',
          query: { redirect: to.fullPath }
        })
      }
    })
  } else {
    next() 
  }
})
export default router

// export default new VueRouter({ routes });


