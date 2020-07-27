<template>
  <v-container class="fill-height px-10" fluid>
    <v-row>
      <span class="text-h5 py-3">对拉诺西亚车头组的相关声明</span>
    </v-row>
    <v-row>
      <v-expansion-panels v-model="panel" multiple>
        <v-expansion-panel>
          <v-expansion-panel-header>声明发布者与内容概要</v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>「宇宙和音」雨空改二：本人在此对拉诺西亚车头组发布国服自助狩猎信息站时、不遵循开源协议及不负责任的直接代码复制行为进行谴责。</p>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>拉诺西亚车头组的行为</v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>
              一、拉诺西亚车头组建立的狩猎信息发布站
              <a href="https://ffxivhuntcn.com/LaNoscea.html" target="_blank">ffxivhuntcn.com</a> 对本站点 (DSRCA) v1 版本的代码进行了直接复制与部分修改的行为，而本站点在 v1 时期于
              <a
                href="https://github.com/amzrk2/dsrca-source/tree/53b4662907176429cd26ae751423ddb7bbacd193" target="_blank"
              >GitHub</a> 进行开源时使用的 GPLv3 协议明确的指定了对代码进行的任何修改、都必须开源并同样以 GPL 协议开源发布。
            </p>
            <p>二、本站点在版本迭代至 v2 时改用了 Apache 2.0 协议，即使是此协议，也明确要求了需要注明原作者版权部分的 LICENSE。纵然在 v1
                时站点确实是使用极其简单、任何人都能轻松完成 (<strong>毫无技术含量</strong>) 的方法搭建的，但是在我<strong>本人未得到一点信息</strong>的情况下直接对站点进行<strong>完全拷贝与修改</strong>、并且打上自己的版权信息的行为始终是让人难以接受的。</p>
            <p>三、部分详情图片，曾经访问过本站点最初版本的玩家很容易理解：</p>
            <v-card class="mx-auto mb-2">
              <v-img src="/temp/temp_01.png" contain></v-img>
              <v-card-subtitle>
                代码结构，相同的本站源代码请见
                <a
                  href="https://github.com/amzrk2/dsrca-source/tree/53b4662907176429cd26ae751423ddb7bbacd193/layouts" target="_blank"
                >这里</a>
              </v-card-subtitle>
            </v-card>
            <v-card class="mx-auto mb-2">
              <v-img src="/temp/temp_02.png" contain></v-img>
              <v-card-subtitle>本人旧 CDN 的 header 部分</v-card-subtitle>
            </v-card>
            <v-card class="mx-auto mb-5">
              <v-img src="/temp/temp_03.png" contain></v-img>
              <v-card-subtitle>复制代码时未改变 Google Analytics 的 UA，使得这边只能更换新的 UA 避免数据混乱</v-card-subtitle>
            </v-card>
            <p>
              四、本文只针对<strong>拉诺西亚车头组</strong>，并不针对全体狩猎车头组成员。在尝试发布旧站点后为了确保网站更新的及时与信息准确，<strong>其他车头组成员</strong>曾经联系到我并建立了
              <a href="http://ffxivhunt.cn" target="_blank">ffxivhunt.cn</a> 这个官方站点，作为一个普通玩家非常感谢他们的付出；但同时我自己也依旧在更新这个站点，也是为了在建立站点的时候提升自己的能力，希望能帮助到一些人。
            </p>
            <p>
              五、以下为写下这些文字时候的拉诺西亚车头组发布站网络快照
              <a href="https://web.archive.org/web/20200727090813/https://ffxivhuntcn.com/LaNoscea.html">https://web.archive.org/web/20200727090813/https://ffxivhuntcn.com/LaNoscea.html</a>
            </p>
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
      panel: [0, 1, 2],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>