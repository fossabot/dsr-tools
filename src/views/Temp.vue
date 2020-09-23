<template>
  <v-container class="fill-height px-10 py-7" fluid>
    <v-row>
      <v-expansion-panels v-model="panel" multiple>
        <v-expansion-panel>
          <v-expansion-panel-header>「2020-08-06」提供七个 FF14 国服魔矿车活动互换上车位</v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>
              魔矿车牌号「mkc14045440」，登陆页面
              <a
                href="https://ff.web.sdo.com/talos"
                target="_blank"
              >ff.web.sdo.com/talos</a> 输入此车牌号上车。
            </p>
            <p>上车成功后通过全站页面右下角联系客服按钮发送你的游戏角色 ID 以及你的车牌号，我会尽快上你的车。我上车用的角色：「宇宙和音」雨空改二；「神拳痕」塔塔露丶塔露；「龙巢神殿」沙之家。</p>
            <p>20:25 车位已满，感谢关注。</p>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Temp',
  data() {
    return {
      panel: [0],
    };
  },
};
</script>

<style lang="scss" scoped>
::v-deep .v-expansion-panel-header {
  font-size: 1.25rem;
}
</style>