import Home from '@/views/Home.vue';
import game from './game';
import about from './about';
import project from './project';

const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      name: '首页',
      icon: 'mdi-home',
    },
  },
  {
    path: '/anime/',
    component: () => import(/* webpackChunkName: "temp" */ '@/views/Anime.vue'),
    meta: {
      name: '本季番组',
      icon: 'mdi-television-box',
    },
  },
  game,
  about,
  {
    path: '/temp/',
    component: () => import(/* webpackChunkName: "temp" */ '@/views/Temp.vue'),
    meta: {
      name: '临时信息发布',
      icon: 'mdi-clipboard-pulse',
    },
  },
  {
    path: '/legacy/',
    meta: {
      name: '访问旧版',
      icon: 'mdi-folder-remove',
      ext: 'https://dsrca.github.io/',
    },
  },
  {
    path: '/404/',
    component: () => import(/* webpackChunkName: "notfound" */ '@/views/NotFound.vue'),
    meta: {
      name: '404 NOT FOUND',
      hide: true,
    },
  },
  {
    path: '/*',
    redirect: '/404/',
    meta: {
      hide: true,
    },
  },
];

export default routes;
