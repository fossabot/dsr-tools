import ChildRouter from '@/views/ChildRouter.vue';

export default {
  path: '/game/',
  name: 'game',
  component: ChildRouter,
  meta: { name: '游戏工具', icon: 'mdi-gamepad' },
  children: [
    {
      path: '/game/minecraft/',
      name: 'game-minecraft',
      component: () => import('@/views/game/Minecraft.vue'),
      meta: { name: 'Minecraft', icon: 'mdi-minecraft' },
    },
    {
      path: '/game/ffxiv/',
      name: 'game-ffxiv',
      component: () => import('@/views/game/FFXIV.vue'),
      meta: { name: 'FFXIV', icon: 'mdi-account-supervisor-circle' },
    },
  ],
};
