import Home from '@/views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      name: '首页',
      icon: 'mdi-home',
    },
  },
  {
    path: '/game/',
    name: 'game',
    component: Home,
    meta: {
      name: '游戏工具',
      icon: 'mdi-gamepad',
    },
    children: [
      {
        path: '/game/minecraft/',
        name: 'game-minecraft',
        component: Home,
        meta: {
          name: 'Minecraft',
        },
      },
      {
        path: '/game/ffxiv/',
        name: 'game-ffxiv',
        component: Home,
        meta: {
          name: 'FFXIV',
        },
      },
    ],
  },
  {
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
  },
  {
    path: '/legacy/',
    name: 'legacy',
    component: Home,
    meta: {
      name: '访问旧版',
      icon: 'mdi-home',
    },
  },
];

export default routes;
