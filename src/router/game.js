import Home from '@/views/Home.vue';

export default {
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
        icon: 'mdi-minecraft',
      },
    },
    {
      path: '/game/ffxiv/',
      name: 'game-ffxiv',
      component: Home,
      meta: {
        name: 'FFXIV',
        icon: 'mdi-account-supervisor-circle',
      },
    },
  ],
};
