<template>
  <v-app id="inspire">
    <v-navigation-drawer app v-model="drawer">
      <v-list dense>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>主页</v-list-item-title>
        </v-list-item>

        <v-list-group no-action>
          <template v-slot:activator>
            <v-list-item-icon>
              <v-icon>mdi-gamepad</v-icon>
            </v-list-item-icon>
            <v-list-item-title>游戏</v-list-item-title>
          </template>

          <v-list-item>
            <v-list-item-title>Minecraft DSRCA 客户端</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>FFXIV 狩猎车时间表</v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-information</v-icon>
          </v-list-item-icon>
          <v-list-item-title>关于</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dense dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
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
export default {
  name: 'App',
  data() {
    return {
      drawer: null,
      game: {
        minecraft: {
          title: 'Minecraft DSR 整合包',
          link: '',
        },
        ffxiv: {
          title: 'Minecraft DSRCA 客户端',
          link: '',
        },
      },
    };
  },
};
</script>