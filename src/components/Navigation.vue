<template>
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
      <v-list-group v-else :key="route.name" no-action :value="isGroupActive(route.path)">
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
</template>

<script>
export default {
  name: 'Navigation',
  props: ['routes', 'drawer'],
  methods: {
    navigateTo(path) {
      this.$router.push(path);
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
    isGroupActive(path) {
      return this.$route.path.includes(path);
    },
  },
};
</script>