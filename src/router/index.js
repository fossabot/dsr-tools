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
  // change title
  if (to.meta.name) {
    document.title = `${to.meta.name} | DSRToolS`;
  } else {
    document.title = 'DSRToolS';
  }
  // remove trailing slash
  if (to.path !== '/' && /\/$/gi.exec(to.path)) {
    const exp = /^(.*)\/$/gi.exec(to.path);
    if (exp && exp[1]) {
      next(exp[1]);
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
