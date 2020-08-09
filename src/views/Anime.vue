<template>
  <div class="fill-height">
    <div class="header">
      <h3>{{ todate }} {{ today }}</h3>
      <span>本季度共 {{ bangumiCount }} 部番组 | 今日上映 {{ todayCount }} 部</span>
    </div>
    <div class="content" v-if="status">
      <div class="day" v-for="date of animeData" :key="date.weekday.id">
        <div class="date">{{ date.weekday.cn }}</div>
        <a v-for="item of date.items" :key="item.id" :href="item.url | filtHttps" target="_blank">
          <div class="anime">
            <img class="anime-img" :src="item.images.large" />
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

export default {
  name: 'Anime',
  data() {
    return {
      status: false,
      animeData: [],
    };
  },
  filters: {
    filtHttps(val) {
      return val.replace(/^http/, 'https');
    },
    filtRating(val) {
      if (Number.isNaN(val)) {
        return '-.-';
      } else {
        return val;
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
    async fetchData() {
      try {
        const res = await axios.get('https://worker.amzrk2.cc/bgm/calendar');
        res.data.forEach((val) => {
          val.items.forEach((val) => {
            if (!val.rating) {
              val.rating = { score: NaN };
            }
          });
        });
        this.animeData = res.data;
        this.status = true;
      } catch (e) {
        console.error(e);
      }
    },
  },
  mounted() {
    this.fetchData();
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
}

.anime {
  position: relative;
  width: $grid-size;
  height: $grid-size;
  transition: $transition;
  user-select: none;

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