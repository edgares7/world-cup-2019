import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Groups from "@/views/Groups.vue";
import Matches from "@/views/Matches.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/groups",
    name: "Groups",
    component: Groups
  },
  {
    path: "/matches",
    name: "Matches",
    component: Matches
  }
];

const router = new VueRouter({
  routes
});

export default router;
