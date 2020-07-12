import Home from '@/views/Home.vue';
import game from './game';
import about from './about';

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
  game,
  about,
  {
    path: '/legacy/',
    name: 'legacy',
    meta: {
      name: '访问旧版',
      icon: 'mdi-folder-remove',
      ext: 'https://amzrk2.cc/',
    },
  },
];

export default routes;
