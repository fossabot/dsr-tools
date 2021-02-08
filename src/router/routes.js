import Home from '@/views/Home.vue';
import game from './game';
import about from './about';
import { mdiHome, mdiTelevisionBox, mdiClipboardPulse } from '@/utils/mdi';

const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      name: '首页',
      icon: mdiHome,
    },
  },
  {
    path: '/anime',
    component: () => import(/* webpackChunkName: "temp" */ '@/views/Anime.vue'),
    meta: {
      name: '本季番组',
      icon: mdiTelevisionBox,
    },
  },
  game,
  about,
  {
    path: '/temp',
    component: () => import(/* webpackChunkName: "temp" */ '@/views/Temp.vue'),
    meta: {
      name: '临时信息发布',
      icon: mdiClipboardPulse,
    },
  },
  // old route scheme/domain redirect
  {
    path: '/ffxiv*',
    redirect: '/game/ffxiv',
    meta: {
      hide: true,
    },
  },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "notfound" */ '@/views/NotFound.vue'),
    meta: {
      name: '404 NOT FOUND',
      hide: true,
    },
  },
  {
    path: '/*',
    redirect: '/404',
    meta: {
      hide: true,
    },
  },
];

export default routes;
