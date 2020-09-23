<template>
  <div class="fill-height">
    <v-overlay absolute :opacity="1" color="white" :value="loading">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </v-overlay>
    <v-carousel cycle show-arrows-on-hover height="auto">
      <v-carousel-item v-for="(item, index) in slides" :key="index">
        <div class="image-wrapper">
          <v-img :src="CDN(`./dsrca/minecraft/${item}`)" />
        </div>
      </v-carousel-item>
    </v-carousel>
    <v-container class="px-5">
      <v-row>
        <v-alert class="alert" type="info" icon="mdi-alert" dense>{{ alert }}</v-alert>
      </v-row>
      <v-row>
        <v-col cols="12" sm="5">
          <v-card class="mx-auto">
            <v-card-title class="primary white--text">
              <span class="title">当前版本</span>
            </v-card-title>
            <v-card-text class="py-0 version-card">
              <v-timeline dense>
                <v-timeline-item
                  v-for="(item, index) of versions"
                  :key="item"
                  :color="index === 0 ? 'info' : 'primary'"
                  small
                >
                  <span class="version-items grey--text text--darken-4">{{ item }}</span>
                </v-timeline-item>
              </v-timeline>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="7">
          <v-card class="mx-auto">
            <v-card-title class="primary white--text">
              <span class="title">整合包详情</span>
            </v-card-title>
            <v-card-text class="version-card">
              <v-list>
                <v-subheader>模组列表</v-subheader>
                <v-list-item v-for="item of modList" :key="item.name">
                  <v-list-item-content>
                    <v-list-item-title>{{ item.name }} - {{ item.desc }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-subheader>下载地址</v-subheader>
                <v-list-item>
                  <v-list-item-content>
                    <div class="download">
                      <div class="download-item" v-for="item of downloads" :key="item.code">
                        <v-btn large color="primary" :href="item.link" target="_blank">
                          {{ item.name }}&nbsp;-&nbsp;提取码:{{ item.code }}
                        </v-btn>
                      </div>
                    </div>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CDN from '../../plugins/cdn';
import axios from 'axios';

export default {
  name: 'Minecraft',
  methods: {
    CDN,
  },
  data() {
    return { loading: true, slides: [], versions: [], modList: [], downloads: [], alert: '' };
  },
  async mounted() {
    try {
      const response = await axios.get(CDN('./dsrca/minecraft/index.json'));
      const res = response.data;
      res.slides.length && (this.slides = res.slides);
      res.versions.length && (this.versions = res.versions);
      res.modList.length && (this.modList = res.modList);
      res.downloads.length && (this.downloads = res.downloads);
      res.alert.length && (this.alert = res.alert);
      this.loading = false;
    } catch (e) {
      console.error('[DSRCA]', e);
    }
  },
};
</script>

<style lang="scss" scoped>
.image-wrapper {
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 28.125%;
  background: #eeeeee;
}

.version-items {
  font-size: 0.875rem;
}

.ex-code {
  margin-left: 1rem;
}

.version-card {
  overflow: auto;
}

.version-card,
.version-items {
  height: 600px;
}

@media screen and (max-width: $responsive-width) {
  .version-card {
    height: 160px;
  }
}

.download {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  .download-item {
    margin: 0.25rem;
    flex: 0 1 auto;
  }
}

.alert {
  margin: 12px;
  width: 100%;
}
</style>