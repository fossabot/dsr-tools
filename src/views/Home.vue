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

export default {
  name: 'Home',
  data() {
    return {
      title: 'お幸わせに。',
      titleLinks: [
        {
          name: 'Bangumi',
          src: 'https://bgm.tv/subject/277954',
        },
        {
          name: 'bilibili',
          src: 'https://bgm.tv/subject/277954',
        },
      ],
    };
  },
  methods: {
    CDN,
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;

  @if $NODE_ENV == production {
    background: url('https://cdn.jsdelivr.net/gh/amzrk2/cdn-stcapi@1.0.2/dsrca/home/cover-row-2020-2-hotfix.webp')
      no-repeat
      center
      center
      fixed;
    background-size: cover;
  } @else {
    background: url('/mock/home/cover-row-2020-2-hotfix.webp') no-repeat center center fixed;
    background-size: cover;
  }

  @media screen and (max-width: 768px) {
    @if $NODE_ENV == production {
      background: url('https://cdn.jsdelivr.net/gh/amzrk2/cdn-stcapi@1.0.2/dsrca/home/cover-col-2020-2-hotfix.webp')
        no-repeat
        center
        center
        fixed;
      background-size: cover;
    } @else {
      background: url('/mock/home/cover-col-2020-2-hotfix.webp') no-repeat center center fixed;
      background-size: cover;
    }
  }
}

.text-trans {
  color: rgba(0, 0, 0, 0.5) !important;
}
</style>