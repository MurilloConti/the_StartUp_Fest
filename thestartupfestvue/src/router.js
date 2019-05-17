import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import StDesc from "./views/StartupDescription.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/StDesc",
      name: "StartupDescription",
      component: StDesc
    }
  ]
});
