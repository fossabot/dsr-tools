import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#8aa2d3', // https://irocore.com/aofuji/
        secondary: '#3f4551', // https://irocore.com/konnezu/
        info: '#8f82bc', // https://irocore.com/fujimurasaki/
      },
    },
  },
  icons: {
    iconfont: 'mdiSvg',
  },
});
