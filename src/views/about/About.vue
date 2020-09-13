<template>
  <v-container class="py-10 px-10 mb-10">
    <div class="row">
      <div class="col-12 col-md-6">
        <v-subheader>作者相关</v-subheader>
        <v-card class="mx-4">
          <v-list-item>
            <v-list-item-avatar>
              <img :src="CDN('./amzrk2/kitashirakawa_tamako_256p.jpg')" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline">{{ name }}</v-list-item-title>
              <v-list-item-subtitle>{{ sub }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <div class="sub-image">
            <v-img :src="CDN('./dsrca/about/82576224_p0.jpg')"></v-img>
          </div>
          <v-card-text class="text-center pb-0">{{ imageCopy }}</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              v-for="item of personalLinks"
              text
              color="info"
              :key="item.link"
              :href="item.link"
              target="_blank"
            >{{ item.title }}</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>

        <v-subheader class="mt-5">版权声明</v-subheader>
        <v-expansion-panels accordion class="mx-4" hover>
          <v-expansion-panel v-for="item of statements" :key="item.title">
            <v-expansion-panel-header>{{ item.title }}</v-expansion-panel-header>
            <v-expansion-panel-content>
              <div class="mt-2" v-html="item.html"></div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>

      <div class="col-12 col-md-6">
        <v-subheader>开源许可</v-subheader>
        <v-expansion-panels accordion class="mx-4" hover>
          <v-expansion-panel v-for="(item, index) of openSourceProjects" :key="item.title">
            <v-expansion-panel-header class="headers">
              <v-icon>mdi-package-variant-closed</v-icon>
              <span>{{ index }}</span>
              <span>{{ item.title }}</span>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-list-item class="mt-2" two-line>
                <v-icon class="mr-5">mdi-certificate-outline</v-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ item.license }}</v-list-item-title>
                  <v-list-item-subtitle>LICENSE</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item two-line>
                <v-icon class="mr-5">mdi-link-variant</v-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ item.link }}</v-list-item-title>
                  <v-list-item-subtitle>项目链接</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </div>
  </v-container>
</template>

<script>
import CDN from '@/plugins/cdn';
import statements from '@/assets/statements';
import openSourceProjects from '@/assets/opensource';

export default {
  name: 'About',
  methods: {
    CDN,
  },
  data() {
    return {
      name: 'DSRKafuU',
      sub: 'かふうです',
      imageCopy: 'Author: かの - Pixiv ID: 82576224',
      personalLinks: [
        { title: '个人页面', link: 'https://amzrk2.cc/' },
        { title: '推特', link: 'https://twitter.com/amzrk2' },
        { title: 'GitHub', link: 'https://github.com/amzrk2' },
      ],
      statements,
      openSourceProjects,
    };
  },
};
</script>

<style lang="scss" scoped>
.headers > * {
  flex: 0 0 auto !important;
  margin-right: 1rem !important;

  &:nth-child(2) {
    font-size: 1.25rem;
    font-weight: 600;
  }
}

// Fix panel width issue
.v-expansion-panels {
  width: unset !important;
}

.sub-image {
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 42.8125%;
}
</style>