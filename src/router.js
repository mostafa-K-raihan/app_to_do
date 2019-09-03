import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import firebase from "firebase";

Vue.use(Router);
const routes = [
  {
    path: "/home",
    name: "home",
    component: Home,
    children: [
      {
        path: 'apps',
        name: 'home.all_apps',
        component: ()=> import(/* webpackChunkName: "apps" */ "./views/Apps.vue")
      },
      {
        path: 'create',
        name: 'home.create_new',
        component: ()=> import(/* webpackChunkName: "create" */ "./views/NewApp.vue")
      }
    ],
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "./views/About.vue")
  },
  {
    path: "*",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "./views/Login.vue")
  },
  {
    path: "/sign-up",
    name: "signup",
    component: () =>
      import(/* webpackChunkName: "signup" */ "./views/SignUp.vue")
  }
]
const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) {
    next("login");
  } else if (!requiresAuth && currentUser) {
    next("home");
  } else next();
});
export default router;
