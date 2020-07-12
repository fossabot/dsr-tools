import ChildRouter from '@/views/ChildRouter.vue';

export default {
  path: '/about/',
  name: 'about',
  component: ChildRouter,
  meta: {
    name: '关于本站',
    icon: 'mdi-information',
  },
  children: [
    {
      path: '/about/changelog/',
      name: 'about-changelog',
      component: () => import('@/views/about/Changelog.vue'),
      meta: { name: '更新记录', icon: 'mdi-timeline' },
    },
    {
      path: '/about/site/',
      name: 'about-site',
      component: () => import('@/views/about/About.vue'),
      meta: { name: '站点信息', icon: 'mdi-license' },
    },
  ],
};
