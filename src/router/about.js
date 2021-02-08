import ChildRouter from '@/views/ChildRouter.vue';
import { mdiInformation, mdiTimeline, mdiLicense } from '@/utils/mdi';

export default {
  path: '/about',
  redirect: '/404',
  component: ChildRouter,
  meta: {
    name: '关于本站',
    icon: mdiInformation,
  },
  children: [
    {
      path: '/about/changelog',
      component: () => import(/* webpackChunkName: "about" */ '@/views/about/Changelog.vue'),
      meta: {
        name: '更新记录',
        icon: mdiTimeline,
      },
    },
    {
      path: '/about/site',
      component: () => import(/* webpackChunkName: "about" */ '@/views/about/About.vue'),
      meta: {
        name: '站点信息',
        icon: mdiLicense,
      },
    },
  ],
};
