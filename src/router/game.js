import ChildRouter from '@/views/ChildRouter.vue';

export default {
  path: '/game',
  redirect: '/404',
  component: ChildRouter,
  meta: { name: '游戏工具', icon: 'mdi-gamepad' },
  children: [
    {
      path: '/game/minecraft',
      component: () => import(/* webpackChunkName: "minecraft" */ '@/views/game/Minecraft.vue'),
      meta: { name: 'Minecraft DSRCA 整合包', short: 'MC 整合包', icon: 'mdi-minecraft' },
    },
    {
      path: '/game/ffxiv',
      component: () => import(/* webpackChunkName: "ffxiv" */ '@/views/game/FFXIV.vue'),
      meta: {
        name: 'FF14 国服狩猎车时间表',
        short: 'FF14 狩猎时间表',
        icon: 'mdi-account-supervisor-circle',
      },
    },
  ],
};
