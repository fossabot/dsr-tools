import ChildRouter from '@/views/ChildRouter.vue';

export default {
  path: '/game/',
  redirect: '/404/',
  component: ChildRouter,
  meta: { name: '游戏工具', icon: 'mdi-gamepad' },
  children: [
    {
      path: '/game/minecraft/',
      component: () => import(/* webpackChunkName: "minecraft" */ '@/views/game/Minecraft.vue'),
      meta: { name: 'Minecraft 整合包', icon: 'mdi-minecraft' },
    },
    {
      path: '/game/ffxiv/',
      component: () => import(/* webpackChunkName: "ffxiv" */ '@/views/game/FFXIV.vue'),
      meta: { name: 'FFXIV 狩猎时间表', icon: 'mdi-account-supervisor-circle' },
    },
  ],
};
