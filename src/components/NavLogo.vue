<template>
  <v-container fluid class="drawer-logo">
    <v-avatar class="my-10" height="120px" width="120px">
      <img :src="CDN('./dsr-tools/home/dsrca_head.webp')" />
    </v-avatar>
  </v-container>
</template>

<script>
import CDN from '@/plugins/cdn';

export default {
  name: 'NavLogo',
  methods: {
    CDN,
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/color.scss';

.drawer-logo {
  text-align: center;
  background-color: $color-primary;
}
</style>