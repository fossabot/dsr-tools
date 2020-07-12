<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer">
      <nav-logo></nav-logo>
      <navigation :routes="routes" :drawer="drawer"></navigation>
    </v-navigation-drawer>

    <v-app-bar app dense dark color="primary">
      <v-app-bar-nav-icon @click.stop="switchDrawerActive"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ $route.meta.name }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-help-circle-outline</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <div class="content">
        <router-view></router-view>
      </div>

      <global-footer></global-footer>
    </v-main>
  </v-app>
</template>

<script>
import routes from '@/router/routes';
import NavLogo from '@/components/NavLogo';
import Navigation from '@/components/Navigation';
import GlobalFooter from '@/components/Footer';

export default {
  name: 'App',
  components: {
    NavLogo,
    Navigation,
    GlobalFooter,
  },
  data() {
    return {
      routes,
      drawer: null,
    };
  },
  methods: {
    switchDrawerActive() {
      this.drawer = !this.drawer;
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  padding-bottom: 50px;
  height: 100%;
  min-height: 100%;
}
</style>