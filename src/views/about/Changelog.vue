<template>
  <v-container fluid class="pt-10 pb-15 pr-10">
    <v-timeline v-for="(item, index) of changelog" :key="item.version" dense align-top>
      <v-timeline-item fill-dot :small="index !== 0" color="info">
        <template v-slot:icon>
          <v-icon
            dark
            :small="index !== 0"
            v-text="index === 0 ? 'mdi-check' : 'mdi-history'"
          ></v-icon>
        </template>
        <v-card class="elevation-2">
          <v-card-title class="py-2 px-4">
            <span>{{ item.version }}</span>
            <span class="mx-2">-</span>
            <span class="subtitle-2">{{ item.date }}</span>
            <v-spacer />
            <v-btn depressed small color="info" @click="handleItemClick(index)">切换详情</v-btn>
          </v-card-title>
          <v-expand-transition>
            <div v-if="item.active">
              <v-divider />
              <v-card-subtitle class="subtitle-2">更新内容</v-card-subtitle>
              <v-card-text>
                <ol>
                  <li v-for="(log, index) in item.logs" :key="`${item.version}-${index}`">
                    {{ log }}
                  </li>
                </ol>
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
import changelog from '@/assets/changelog';

export default {
  name: 'Changelog',
  data() {
    return {
      changelog,
    };
  },
  methods: {
    handleItemClick(index) {
      this.$set(this.changelog[index], 'active', !this.changelog[index].active);
    },
  },
};
</script>