<template>
  <v-container fluid class="drawer-logo">
    <v-img :src="CDN('./home/dsrca_logo.svg')" aspect-ratio="1" width="120px" contain />
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
.drawer-logo {
  text-align: center;

  & > div {
    margin: 30px auto;
  }
}
</style>