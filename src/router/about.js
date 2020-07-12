import Home from '@/views/Home.vue';

export default {
  path: '/about/',
  name: 'about',
  component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
  meta: {
    name: '关于本站',
    icon: 'mdi-information',
  },
  children: [
    {
      path: '/about/changelog/',
      name: 'about-changelog',
      component: Home,
      meta: {
        name: '更新记录',
      },
    },
    {
      path: '/about/site/',
      name: 'about-site',
      component: Home,
      meta: {
        name: '站点信息',
      },
    },
  ],
};
