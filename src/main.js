import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

import VueAnalytics from 'vue-analytics';
Vue.use(VueAnalytics, {
  id: 'UA-146011233-7',
  router,
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
