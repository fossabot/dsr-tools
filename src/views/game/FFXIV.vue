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

      <!-- <temp-alert info="对拉诺西亚车头组的相关声明"></temp-alert> -->

      <v-tab-item key="tab-0" value="tab-0">
        <v-container class="pa-10">
          <v-alert type="success">{{ formatedDate }}</v-alert>
          <v-card class="mx-auto mt-10 pa-2">
            <v-list-item two-line v-for="(sec, index) of info" :key="`info-${index}`">
              <v-list-item-content>
                <v-list-item-title>{{ sec.title }}</v-list-item-title>
                <v-list-item-subtitle>
                  <template v-if="sec.link">
                    <a :href="sec.text" target="_blank">{{ sec.text }}</a>
                  </template>
                  <template v-else>{{ sec.text }}</template>
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
import storage from '@/plugins/storage';

// import TempAlert from '../../components/TempAlert.vue';

export default {
  name: 'FFXIV',
  // components: {
  //   TempAlert,
  // },
  data() {
    return {
      loading: true,
      data: [],
      lastUpdate: new Date(0),
      tab: storage.getLS('dsrca_ffxiv-tab') || 'tab-0',
      headers: [
        { text: '服务器', value: 'server', align: 'center' },
        { text: '早车', value: 'timeTable[0]', align: 'center' },
        { text: '午车', value: 'timeTable[1]', align: 'center' },
        { text: '晚车', value: 'timeTable[2]', align: 'center' },
        { text: '灵车', value: 'timeTable[3]', align: 'center' },
        { text: '始发地', value: 'origin', align: 'center' },
        { text: '路线', value: 'route', align: 'center' },
      ],
      info: [
        { title: '更新频率', text: '狩猎车相关数据为手动更新, 约 10-15 天同步一次', link: false },
        {
          title: '数据不刷新问题',
          text: '数据更新后 CDN 缓存需要约 10-15 分钟全球刷新, 若出现问题则最高需要 12 小时',
          link: false,
        },
        { title: '错误反馈', text: '请使用右下角按钮直接进行客服提问反馈, 或至 NGA 原帖回帖反馈', link: false },
        { title: '感谢访问', text: '如果觉得本站对您有所帮助还请多多分享, 用户的使用是我更新的最大动力', link: false },
        { title: 'NGA 原帖', text: 'https://nga.178.com/read.php?tid=20339590', link: true },
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
        const response = await axios.get(CDN('./ffxiv/cn-hunting.json', '1'));
        const res = response.data;
        // Update time
        this.lastUpdate = new Date(res.lastUpdate);
        storage.setSS('dsrca_ffxiv-last-update', this.lastUpdate.getTime());
        // Data
        for (let area in res.huntingData) {
          let areaData = res.huntingData[area];
          this.data.push(areaData);
        }
        storage.setSS('dsrca_ffxiv-cache', JSON.stringify(this.data));
        console.log('[DSRCA] Latest data loaded');
        setTimeout(() => {
          this.loading = false;
        }, 500);
      } catch (e) {
        console.error('[DSRCA]', e);
      }
    },
    handleTabChange(val) {
      storage.setLS('dsrca_ffxiv-tab', val);
    },
  },
  async mounted() {
    const cacheDate = storage.getSS('dsrca_ffxiv-last-update');
    const cacheData = storage.getSS('dsrca_ffxiv-cache');
    if (cacheDate && cacheData) {
      // If data cache founded
      this.lastUpdate = new Date(Number.parseInt(cacheDate));
      this.data = JSON.parse(cacheData);
      console.log('[DSRCA] Data cache loaded');
      setTimeout(() => {
        this.loading = false;
      }, 500);
    } else {
      this.fetchData();
    }
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

.text-trans {
  color: rgba(0, 0, 0, 0.5) !important;
}
</style>