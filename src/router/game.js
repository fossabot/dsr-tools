import ChildRouter from '@/views/ChildRouter.vue';
import { mdiGamepad, mdiMinecraft, mdiAccountSupervisorCircle } from '@/utils/mdi';

export default {
  path: '/game',
  redirect: '/404',
  component: ChildRouter,
  meta: {
    name: '游戏工具',
    icon: mdiGamepad,
  },
  children: [
    {
      path: '/game/minecraft',
      component: () => import(/* webpackChunkName: "minecraft" */ '@/views/game/Minecraft.vue'),
      meta: {
        name: 'Minecraft DSRCA 整合包',
        short: 'MC 整合包',
        icon: mdiMinecraft,
      },
    },
    {
      path: '/game/ffxiv',
      component: () => import(/* webpackChunkName: "ffxiv" */ '@/views/game/FFXIV.vue'),
      meta: {
        name: 'FF14 国服狩猎车时间表',
        short: 'FF14 狩猎时间表',
        icon: mdiAccountSupervisorCircle,
      },
    },
  ],
};
