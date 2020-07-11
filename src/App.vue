<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer">
      <v-list dense>
        <template v-for="route of routes">
          <!-- 若无子路由 -->
          <v-list-item
            v-if="!route.children"
            :key="route.name"
            :class="isRouteActive(route.path)"
            @click="navigateTo(route.path)"
            color="primary"
          >
            <v-list-item-icon>
              <v-icon>{{ route.meta.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ route.meta.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!-- 若有子路由 -->
          <v-list-group v-else :key="route.name" no-action>
            <template v-slot:activator>
              <v-list-item-icon>
                <v-icon>{{ route.meta.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ route.meta.name }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="child of route.children"
              :key="child.name"
              :class="isRouteActive(child.path)"
              @click="navigateTo(child.path)"
              color="primary"
            >
              <v-list-item-content>
                <v-list-item-title>{{ child.meta.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </template>
      </v-list>
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
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import routes from '@/router/routes';

export default {
  name: 'App',
  data() {
    return {
      routes,
      drawer: null,
    };
  },
  methods: {
    navigateTo(path) {
      this.$router.push(path);
    },
    switchDrawerActive() {
      this.drawer = !this.drawer;
    },
    isRouteActive(path) {
      if (path === this.$route.path) {
        return {
          'v-list-item--active': true,
        };
      } else {
        return '';
      }
    },
  },
};
</script>