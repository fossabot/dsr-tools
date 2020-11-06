import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

// Same route error
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  if (to.meta.name) {
    document.title = `${to.meta.name} - DSRCA`;
  } else {
    document.title = 'DSRCA';
  }
  next();
});

export default router;
