<template>
  <v-alert
    class="temp-alert ma-10"
    type="warning"
    dismissible
    transition="scale-transition"
    icon="mdi-alert"
    v-model="display"
    dense
  >
    {{ info }}
    <v-btn color="white" class="text-error ml-2" small @click="$router.push('/temp/')"
      >查看详情</v-btn
    >
  </v-alert>
</template>

<script>
import storage from '../plugins/storage.js';

export default {
  name: 'TempAlert',
  props: {
    info: String,
  },
  data() {
    return {
      display: false,
    };
  },
  mounted() {
    const alertStatus = storage.getSS('dsrca_temp-alert');
    if (alertStatus === 'true' || !alertStatus) {
      this.display = true;
    }
  },
  watch: {
    display() {
      storage.setSS('dsrca_temp-alert', this.display);
    },
  },
};
</script>

<style lang="scss" scoped>
.temp-alert {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 20;
}

.text-error {
  color: #fb8c00 !important;
}
</style>
