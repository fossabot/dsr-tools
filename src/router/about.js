import ChildRouter from '@/views/ChildRouter.vue';

export default {
  path: '/about/',
  redirect: '/404/',
  component: ChildRouter,
  meta: {
    name: '关于本站',
    icon: 'mdi-information',
  },
  children: [
    {
      path: '/about/changelog/',
      component: () => import(/* webpackChunkName: "about" */ '@/views/about/Changelog.vue'),
      meta: { name: '更新记录', icon: 'mdi-timeline' },
    },
    {
      path: '/about/site/',
      component: () => import(/* webpackChunkName: "about" */ '@/views/about/About.vue'),
      meta: { name: '站点信息', icon: 'mdi-license' },
    },
  ],
};
