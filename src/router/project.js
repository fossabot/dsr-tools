export default {
  path: '/project/',
  redirect: '/404/',
  meta: {
    name: '其他项目',
    icon: 'mdi-layers',
  },
  children: [
    {
      path: '/project/fake-update-ng/',
      meta: {
        name: '系统升级模拟器',
        icon: 'mdi-update',
        ext: 'https://fake-update.amzrk2.cc/',
      },
    },
    {
      path: '/project/hugo-theme-fuji/',
      meta: {
        name: 'Hugo 主题 Fuji',
        icon: 'mdi-github',
        ext: 'https://github.com/amzrk2/hugo-theme-fuji',
      },
    },
  ],
};
