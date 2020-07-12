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
  game,
  project,
  about,
  {
    path: '/legacy/',
    meta: {
      name: '访问旧版',
      icon: 'mdi-folder-remove',
      ext: 'https://amzrk2.cc/',
    },
  },
  {
    path: '/404/',
    component: () => import(/* webpackChunkName: "404" */ '@/views/NotFound.vue'),
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
