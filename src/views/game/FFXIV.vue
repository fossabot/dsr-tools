<template>
  <div class="fill-height">
    <v-tabs v-model="tab" color="info" @change="handleTabChange">
      <v-tab href="#tab-0">关于</v-tab>
      <v-tab href="#tab-1">陆行鸟</v-tab>
      <v-tab href="#tab-2">莫古力</v-tab>
      <v-tab href="#tab-3">猫小胖</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab" class="fill-height">
      <v-overlay absolute :opacity="1" color="white" :value="loading">
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
      </v-overlay>

      <v-tab-item key="tab-0" value="tab-0">
        <v-container class="pa-10">
          <v-alert type="success">{{ formatedDate }}</v-alert>
          <v-card class="mx-auto mt-10 pa-2">
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>更新频率</v-list-item-title>
                <v-list-item-subtitle>狩猎车相关数据为手动更新, 约 10-15 天同步一次</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>错误反馈</v-list-item-title>
                <v-list-item-subtitle>请使用右上角按钮直接进行客服提问反馈, 或至 NGA 原帖回帖反馈</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>感谢访问</v-list-item-title>
                <v-list-item-subtitle>如果觉得本站对您有所帮助还请多多分享, 使用右上角分享按钮可快捷复制链接</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>NGA 原帖</v-list-item-title>
                <v-list-item-subtitle>
                  <a
                    href="https://nga.178.com/read.php?tid=20339590"
                    target="_blank"
                  >https://nga.178.com/read.php?tid=20339590</a>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-container>
      </v-tab-item>

      <v-tab-item v-for="(area, index) of data" :key="`tab-${index+1}`" :value="`tab-${index+1}`">
        <div>
          <span class="table-title">5.X 狩猎车列表</span>
          <v-data-table
            :headers="headers"
            :items="area.shadowbringers"
            hide-default-footer
            dense
            disable-filtering
            disable-pagination
            disable-sort
          ></v-data-table>
        </div>
        <v-divider></v-divider>
        <div>
          <span class="table-title">4.X 狩猎车列表</span>
          <v-data-table
            :headers="headers"
            :items="area.stormblood"
            hide-default-footer
            dense
            disable-filtering
            disable-pagination
            disable-sort
          ></v-data-table>
        </div>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import axios from 'axios';
import CDN from '@/plugins/cdn';
import ls from '@/plugins/ls';

export default {
  name: 'FFXIV',
  data() {
    return {
      loading: true,
      data: [],
      lastUpdate: new Date(0),
      tab: ls.getLS('dsrca_ffxiv-tab') || 'tab-0',
      headers: [
        { text: '服务器', value: 'server', align: 'center' },
        { text: '早车', value: 'timeTable[0]', align: 'center' },
        { text: '午车', value: 'timeTable[1]', align: 'center' },
        { text: '晚车', value: 'timeTable[2]', align: 'center' },
        { text: '灵车', value: 'timeTable[3]', align: 'center' },
        { text: '始发地', value: 'origin', align: 'center' },
        { text: '路线', value: 'route', align: 'center' },
      ],
    };
  },
  computed: {
    formatedDate() {
      let date = this.lastUpdate;
      let year = date.getFullYear();
      let month = `${date.getMonth() + 1}`.padStart(2, '0');
      let day = `${date.getDate()}`.padStart(2, '0');
      let h = `${date.getHours()}`.padStart(2, '0');
      let m = `${date.getMinutes()}`.padStart(2, '0');
      let s = `${date.getSeconds()}`.padStart(2, '0');
      return `最后更新于 ${year}-${month}-${day} ${h}:${m}:${s}`;
    },
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get(CDN('./ffxiv/cn-hunting.json'));
        if (response.status === 200) {
          const res = response.data;
          this.lastUpdate = new Date(res.lastUpdate);
          for (let area in res.huntingData) {
            let areaData = res.huntingData[area];
            this.data.push(areaData);
          }
          this.loading = false;
        } else {
          throw new Error('Response wrong status');
        }
      } catch (e) {
        console.error(e);
      }
    },
    handleTabChange(val) {
      ls.setLS('dsrca_ffxiv-tab', val);
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/color';

// Hide empty header in mobile
::v-deep .v-data-table-header-mobile {
  display: none;
}

.table-title {
  display: block;
  padding: 1rem;
  margin-left: 2rem;
  font-size: 20px;
  font-weight: 600;
}

a {
  text-decoration: none;
  color: $color-info;
}
</style>