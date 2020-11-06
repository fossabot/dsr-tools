<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <h1 class="display-1 mb-4">404 NOT FOUND</h1>
        <h4 class="subheading"><span v-text="timer"></span> 秒后自动返回首页</h4>
        <v-btn class="text-trans ma-5" large @click="backHome">返回首页</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'NotFound',
  data() {
    return {
      timer: 10,
    };
  },
  methods: {
    backHome() {
      this.$router.push('/');
    },
  },
  mounted() {
    let promise = new Promise((res, rej) => {
      try {
        let int = setInterval(() => {
          this.timer--;
          if (this.timer <= 0) {
            clearInterval(int);
            res();
          }
        }, 1000);
      } catch (e) {
        console.error(e);
        rej(e);
      }
    });
    promise.then(() => {
      this.backHome();
    });
  },
};
</script>

<style lang="scss" scoped>
.text-trans {
  color: rgba(0, 0, 0, 0.5) !important;
}
</style>