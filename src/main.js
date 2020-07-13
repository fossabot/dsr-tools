import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

import VueAnalytics from 'vue-analytics';
if (process.env.NODE_ENV === 'production') {
  Vue.use(VueAnalytics, {
    id: 'UA-146011233-7',
    router,
  });
} else {
  Vue.use(VueAnalytics, {
    id: 'UA-000000000-0',
    router,
  });
}

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
