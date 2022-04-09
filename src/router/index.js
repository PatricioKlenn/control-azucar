import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "../store";

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/bloodSugar',
      name: 'blood-sugar',
      component: () => import('../views/BloodSugarView.vue')
    },
    {
      path: '/',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    }
  ]
})

const getters = store.getters;
const state = store.state;

router.beforeEach((to, from, next) => {
  if (getters.localStorage("user") && state.user === null) {
    state.user = JSON.parse(getters.localStorage("user"));
  }

  if (to.name !== "login" && !state.user) {
    next({ name: "login" });
  } else if (to.name) {
    if (to.name == "login" && getters.localStorage("user")) {
      next("bloodSugar");
    }
    next();
  }
});
export default router
