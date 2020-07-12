<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer">
      <nav-logo></nav-logo>
      <navigation :routes="routes" :drawer="drawer"></navigation>
    </v-navigation-drawer>

    <v-app-bar app dense dark color="primary">
      <v-app-bar-nav-icon @click.stop="switchDrawerActive"></v-app-bar-nav-icon>
      <v-toolbar-title>DSRCA</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-share</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>

      <v-footer absolute color="primary" dark>
        <v-spacer></v-spacer>
        <div>&copy; {{ new Date().getFullYear() }}</div>
        <v-spacer></v-spacer>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>
import routes from '@/router/routes';
import NavLogo from '@/components/NavLogo';
import Navigation from '@/components/Navigation';

export default {
  name: 'App',
  components: {
    NavLogo,
    Navigation,
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