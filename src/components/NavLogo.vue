<template>
  <v-container fluid class="drawer-logo">
    <v-img :src="CDN('./home/dsrca_logo_roll.png')" aspect-ratio="1" width="120px" contain />
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
@import '@/plugins/color.scss';

.drawer-logo {
  text-align: center;
  background-color: $color-primary;

  & > div {
    margin: 40px auto;
  }
}
</style>