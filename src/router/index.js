import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import MyLogin from "../views/MyLogin.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children:[
      {path:"1",name:"hahaha",component:()=>import("../views/home/HomeIndex.vue")},
      {path:"2-1",component:()=>import("../views/home/MyList.vue")},
      {path:"2-2",component:()=>import("../views/home/MyRouter.vue")},
    ]
  },
  {
    path:"/login",
    name:"login",
    component:MyLogin
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
