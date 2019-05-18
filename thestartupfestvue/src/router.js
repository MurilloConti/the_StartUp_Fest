import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import StDesc from "./views/StartupDescription.vue";
import Results from "./views/Results.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/description",
      name: "StartupDescription",
      component: StDesc
    },
    {
      path: "/results",
      name: "results",
      component: Results
    }
  ]
});
