<template>
  <div class="home">
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col offset="1" offset-md="2">
          <h1 class="text-trans text-h3 text-md-h2 text-no-wrap mb-4 ml-1">{{ title }}</h1>
          <template v-for="link of titleLinks">
            <v-btn
              class="text-trans ma-2"
              large
              :href="link.src"
              target="_blank"
              :key="link.src"
            >{{ link.name }}</v-btn>
          </template>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CDN from '@/plugins/cdn';
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      title: '',
      titleLinks: [],
    };
  },
  methods: {
    CDN,
  },
  async mounted() {
    try {
      const response = await axios.get(CDN('./dsrca/home/index.json'));
      const res = response.data;
      if (res.title) {
        this.title = res.title;
        this.titleLinks = res.links;
      }
    } catch (e) {
      console.error('[DSRCA]', e);
    }
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;

  background: url('https://cdn.jsdelivr.net/gh/amzrk2/cdn-stcapi@1/dsrca/home/cover-row.webp')
    no-repeat center center fixed;
  background-size: cover;

  @media screen and (max-width: 900px) {
    background: url('https://cdn.jsdelivr.net/gh/amzrk2/cdn-stcapi@1/dsrca/home/cover-col.webp')
      no-repeat center center fixed;
    background-size: cover;
  }
}

.text-trans {
  color: rgba(0, 0, 0, 0.5) !important;
}
</style>