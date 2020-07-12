<template>
  <v-footer absolute color="primary" dark style="height: 50px;">
    <v-container class="author text-center ma-0 pa-0" fluid>
      <v-icon small>mdi-copyright</v-icon>
      <span>2019-{{ new Date().getFullYear() }}</span>
      <a href="https://amzrk2.cc/" target="_blank">DSRKafuU</a>
    </v-container>
    <v-container class="version text-center ma-0 pa-0" fluid>
      <span>DSRCA {{ changelog[0].version }}</span>
    </v-container>
  </v-footer>
</template>

<script>
import changelog from '@/assets/changelog';

export default {
  name: 'Footer',
  data() {
    return {
      changelog,
    };
  },
};
</script>

<style lang="scss" scoped>
.author {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;

  a {
    color: #ffffff;
    text-decoration: none;
  }

  & > * {
    padding: 0 0.1rem;
  }
}

.version {
  font-size: 12px;
}
</style>