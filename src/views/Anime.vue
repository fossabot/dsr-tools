<template>
  <div class="fill-height">
    <div class="header">
      <h3>{{ todate }} {{ today }}</h3>
      <span>本季度共 {{ bangumiCount }} 部番组 | 今日上映 {{ todayCount }} 部</span>
    </div>
    <v-overlay absolute :opacity="1" color="white" :value="!status">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </v-overlay>
    <div class="content" v-if="status">
      <div class="day" v-for="date of animeData" :key="date.weekday.id">
        <div :class="['date', {'today': today === date.weekday.cn}]">{{ date.weekday.cn }}</div>
        <a v-for="item of date.items" :key="item.id" :href="item.url | filtHttps" target="_blank">
          <div class="anime">
            <img class="anime-img" :src="item.images" />
            <div class="anime-name">
              <div class="name-zh">{{ item.name_cn }}</div>
              <div class="name-ja">{{ item.name }}</div>
            </div>
            <div class="anime-rating">{{ item.rating.score | filtRating }}</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import CDN_OSS_SUBJECT from '../plugins/bangumi/imageCDN';
import storage from '../plugins/storage';

export default {
  name: 'Anime',
  data() {
    return {
      status: false,
      animeData: [],
      cdnHash: {},
    };
  },
  filters: {
    filtHttps(val) {
      return val.replace(/^http/, 'https');
    },
    filtRating(val) {
      if (val === -1) {
        return '-.-';
      } else if (Math.floor(val) === val) {
        return `${val}.0`;
      } else {
        return `${val}`;
      }
    },
  },
  computed: {
    today() {
      const date = new Date();
      const dateArr = ['日', '一', '二', '三', '四', '五', '六'];
      return `星期${dateArr[date.getDay()]}`;
    },
    todate() {
      const date = new Date();
      return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
    },
    bangumiCount() {
      if (this.status) {
        let count = 0;
        this.animeData.forEach((val) => {
          count += val.items.length;
        });
        return count;
      } else {
        return '-';
      }
    },
    todayCount() {
      if (this.status) {
        const date = new Date();
        if (date.getDay() === 0) {
          return this.animeData[6].items.length;
        } else {
          return this.animeData[date.getDay() - 1].items.length;
        }
      }
      return '-';
    },
  },
  methods: {
    async fetchHash() {
      try {
        const hash = await axios.get(
          'https://cdn.jsdelivr.net/gh/czy0729/Bangumi-OSS@master/hash/subject.json'
        );
        this.cdnHash = hash.data;
      } catch (e) {
        console.error(e);
      }
    },
    async fetchData() {
      try {
        const res = await axios.get('https://worker.amzrk2.cc/bgm/calendar');
        res.data.forEach((val) => {
          val.items.forEach((val) => {
            if (!val.rating) {
              val.rating = { score: -1 };
            }
          });
        });
        this.animeData = res.data;
      } catch (e) {
        console.error(e);
      }
    },
    async applyCDN() {
      await Promise.all([this.fetchHash(), this.fetchData()]);
      this.animeData.forEach((val) => {
        val.items.forEach((val) => {
          const image = CDN_OSS_SUBJECT(val.images.common.replace(/^http/, 'https'), this.cdnHash);
          val.images = image;
        });
      });
      this.status = true;
    },
    storeCache() {
      storage.setLS('dsrca_anime-cache', JSON.stringify(this.animeData));
      const date = new Date();
      const time = date.getTime();
      storage.setLS('dsrca_anime-cache-date', JSON.stringify(time));
    },
  },
  async mounted() {
    const date = new Date();
    const time = date.getTime();
    try {
      const cacheTime = JSON.parse(storage.getLS('dsrca_anime-cache-date'));
      if (time - cacheTime < 86400000) {
        const cache = JSON.parse(storage.getLS('dsrca_anime-cache'));
        if (cache.length > 1) {
          this.animeData = cache;
          this.status = true;
          return;
        }
      }
      await this.applyCDN();
      this.storeCache();
    } catch (e) {
      console.error(e);
      await this.applyCDN();
      this.storeCache();
    }
  },
};
</script>

<style lang="scss" scoped>
$grid-size: 8rem;
$grid-size-hover: 11.2rem;
$space-size: 0.2rem;
$transition: all 150ms ease-out;
$text-color: rgba(255, 255, 255, 0.8);
$text-bg: rgba(0, 0, 0, 0.5);

.header {
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;

  h3 {
    flex: 0 0 auto;
    font-size: 1rem;
  }

  span {
    flex: 0 1 auto;
    font-size: 1rem;
    overflow: hidden;
    text-overflow: clip;
    white-space: nowrap;
    padding-left: 1rem;
  }

  @media screen and (max-width: $responsive-width) {
    flex: 0 0 auto;
    flex-direction: column;

    span {
      flex: 0 0 auto;
      font-size: 0.875rem;
      padding-left: 0;
    }
  }
}

.content {
  margin: 0 1.5rem 1rem 1.5rem;
  display: flex;
  justify-content: center;
}

.day {
  flex: 0 0 auto;
  width: $grid-size;
  margin: 0 $space-size;
  display: flex;
  flex-direction: column;

  & > div,
  & > a {
    display: block;
    flex: 0 0 auto;
    &:not(:first-child):not(:last-child) {
      margin: $space-size 0;
    }
    &:first-child {
      margin: 0 0 $space-size 0;
    }
    &:last-child {
      margin: $space-size 0 0 0;
    }
  }
}

.date {
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  background-color: $color-primary;
  color: #fffffd;

  &.today {
    background-color: $color-info;
  }
}

.anime {
  position: relative;
  width: $grid-size;
  height: $grid-size;
  transition: $transition;
  user-select: none;
  background-color: #eeeeee;

  .anime-img {
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;
    object-fit: cover;
  }

  .anime-name {
    position: absolute;
    color: $text-color;
    bottom: 0;
    width: 100%;
    height: 2.1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: clip;
    padding: 0.2rem;
    background-color: $text-bg;
    opacity: 1;
    transition: $transition;

    .name-zh {
      font-size: 0.75rem;
      line-height: 0.85rem;
      overflow: hidden;
      text-overflow: clip;
    }
    .name-ja {
      font-size: 0.7rem;
      line-height: 0.85rem;
      overflow: hidden;
      text-overflow: clip;
    }
  }

  .anime-rating {
    position: absolute;
    color: $text-color;
    top: 0;
    right: 0;
    white-space: nowrap;
    padding: 0.2rem;
    background-color: $text-bg;
    font-size: 0.7rem;
    line-height: 0.85rem;
    opacity: 1;
    transition: $transition;
  }

  &:hover {
    height: $grid-size-hover;
    cursor: pointer;

    .anime-name,
    .anime-rating {
      opacity: 0;
      transition: $transition;
    }
  }
}
</style>