import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import StDesc from "./views/StartupDescription.vue";
import Results from "./views/Results.vue";
import firebase from 'firebase'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/description",
      name: "StartupDescription",
      component: StDesc,
      meta: {
        requiresAuth: true
      },
      beforeEnter: (to, from, next) => {
        const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
        const currentUser = firebase.auth().currentUser

        if (requiresAuth && !currentUser) {
          next();
        } else if (requiresAuth && currentUser) {
          next();
        } else {
          next();
        }
      }
    },
    {
      path: "/results",
      name: "results",
      component: Results
    },
    { path: '*', redirect: Home }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
});

