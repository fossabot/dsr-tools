<template>
  <div class="fill-height">
    <div class="header">
      <h3>2020年08月09日 星期日</h3>
      <span>本季度共 59 部番组 | 今日上映 7 部</span>
    </div>
    <div class="content">
      <div class="day" v-for="date of animeData" :key="date.day">
        <div class="date">{{ date.day }}</div>
        <a v-for="item of date.list" :key="item.id" :href="item.link" target="_blank">
          <div class="anime">
            <img class="anime-img" :src="item.cover" />
            <div class="anime-name">
              <div class="name-zh">{{ item.zhName }}</div>
              <div class="name-ja">{{ item.jaName}}</div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';

export default {
  name: 'Anime',
  data() {
    return {
      animeData: [
        {
          day: '星期日',
          list: [
            {
              id: '277954',
              zhName: '我的青春恋爱物语果然有问题 完',
              jaName: 'やはり俺の青春ラブコメはまちがっている。完',
              cover: '//lain.bgm.tv/pic/cover/c/ba/69/277954_s8qHA.jpg',
              link: 'https://bgm.tv/subject/277954',
            },
            {
              id: '277954',
              zhName: '我的青春恋爱物语果然有问题 完',
              jaName: 'やはり俺の青春ラブコメはまちがっている。完',
              cover: '//lain.bgm.tv/pic/cover/c/ba/69/277954_s8qHA.jpg',
              link: 'https://bgm.tv/subject/277954',
            },
            {
              id: '277954',
              zhName: '我的青春恋爱物语果然有问题 完',
              jaName: 'やはり俺の青春ラブコメはまちがっている。完',
              cover: '//lain.bgm.tv/pic/cover/c/ba/69/277954_s8qHA.jpg',
              link: 'https://bgm.tv/subject/277954',
            },
          ],
        },
        {
          day: '星期一',
          list: [
            {
              id: '277954',
              zhName: '我的青春恋爱物语果然有问题 完',
              jaName: 'やはり俺の青春ラブコメはまちがっている。完',
              cover: '//lain.bgm.tv/pic/cover/c/ba/69/277954_s8qHA.jpg',
              link: 'https://bgm.tv/subject/277954',
            },
            {
              id: '277954',
              zhName: '我的青春恋爱物语果然有问题 完',
              jaName: 'やはり俺の青春ラブコメはまちがっている。完',
              cover: '//lain.bgm.tv/pic/cover/c/ba/69/277954_s8qHA.jpg',
              link: 'https://bgm.tv/subject/277954',
            },
            {
              id: '277954',
              zhName: '我的青春恋爱物语果然有问题 完',
              jaName: 'やはり俺の青春ラブコメはまちがっている。完',
              cover: '//lain.bgm.tv/pic/cover/c/ba/69/277954_s8qHA.jpg',
              link: 'https://bgm.tv/subject/277954',
            },
          ],
        },
        {
          day: '星期二',
          list: [
            {
              id: '277954',
              zhName: '我的青春恋爱物语果然有问题 完',
              jaName: 'やはり俺の青春ラブコメはまちがっている。完',
              cover: '//lain.bgm.tv/pic/cover/c/ba/69/277954_s8qHA.jpg',
              link: 'https://bgm.tv/subject/277954',
            },
            {
              id: '277954',
              zhName: '我的青春恋爱物语果然有问题 完',
              jaName: 'やはり俺の青春ラブコメはまちがっている。完',
              cover: '//lain.bgm.tv/pic/cover/c/ba/69/277954_s8qHA.jpg',
              link: 'https://bgm.tv/subject/277954',
            },
            {
              id: '277954',
              zhName: '我的青春恋爱物语果然有问题 完',
              jaName: 'やはり俺の青春ラブコメはまちがっている。完',
              cover: '//lain.bgm.tv/pic/cover/c/ba/69/277954_s8qHA.jpg',
              link: 'https://bgm.tv/subject/277954',
            },
          ],
        },
        {
          day: '星期三',
          list: [
            {
              id: '277954',
              zhName: '我的青春恋爱物语果然有问题 完',
              jaName: 'やはり俺の青春ラブコメはまちがっている。完',
              cover: '//lain.bgm.tv/pic/cover/c/ba/69/277954_s8qHA.jpg',
              link: 'https://bgm.tv/subject/277954',
            },
            {
              id: '277954',
              zhName: '我的青春恋爱物语果然有问题 完',
              jaName: 'やはり俺の青春ラブコメはまちがっている。完',
              cover: '//lain.bgm.tv/pic/cover/c/ba/69/277954_s8qHA.jpg',
              link: 'https://bgm.tv/subject/277954',
            },
            {
              id: '277954',
              zhName: '我的青春恋爱物语果然有问题 完',
              jaName: 'やはり俺の青春ラブコメはまちがっている。完',
              cover: '//lain.bgm.tv/pic/cover/c/ba/69/277954_s8qHA.jpg',
              link: 'https://bgm.tv/subject/277954',
            },
          ],
        },
        {
          day: '星期四',
          list: [
            {
              id: '277954',
              zhName: '我的青春恋爱物语果然有问题 完',
              jaName: 'やはり俺の青春ラブコメはまちがっている。完',
              cover: '//lain.bgm.tv/pic/cover/c/ba/69/277954_s8qHA.jpg',
              link: 'https://bgm.tv/subject/277954',
            },
            {
              id: '277954',
              zhName: '我的青春恋爱物语果然有问题 完',
              jaName: 'やはり俺の青春ラブコメはまちがっている。完',
              cover: '//lain.bgm.tv/pic/cover/c/ba/69/277954_s8qHA.jpg',
              link: 'https://bgm.tv/subject/277954',
            },
            {
              id: '277954',
              zhName: '我的青春恋爱物语果然有问题 完',
              jaName: 'やはり俺の青春ラブコメはまちがっている。完',
              cover: '//lain.bgm.tv/pic/cover/c/ba/69/277954_s8qHA.jpg',
              link: 'https://bgm.tv/subject/277954',
            },
          ],
        },
        {
          day: '星期五',
          list: [
            {
              id: '277954',
              zhName: '我的青春恋爱物语果然有问题 完',
              jaName: 'やはり俺の青春ラブコメはまちがっている。完',
              cover: '//lain.bgm.tv/pic/cover/c/ba/69/277954_s8qHA.jpg',
              link: 'https://bgm.tv/subject/277954',
            },
            {
              id: '277954',
              zhName: '我的青春恋爱物语果然有问题 完',
              jaName: 'やはり俺の青春ラブコメはまちがっている。完',
              cover: '//lain.bgm.tv/pic/cover/c/ba/69/277954_s8qHA.jpg',
              link: 'https://bgm.tv/subject/277954',
            },
            {
              id: '277954',
              zhName: '我的青春恋爱物语果然有问题 完',
              jaName: 'やはり俺の青春ラブコメはまちがっている。完',
              cover: '//lain.bgm.tv/pic/cover/c/ba/69/277954_s8qHA.jpg',
              link: 'https://bgm.tv/subject/277954',
            },
          ],
        },
        {
          day: '星期六',
          list: [
            {
              id: '277954',
              zhName: '我的青春恋爱物语果然有问题 完',
              jaName: 'やはり俺の青春ラブコメはまちがっている。完',
              cover: '//lain.bgm.tv/pic/cover/c/ba/69/277954_s8qHA.jpg',
              link: 'https://bgm.tv/subject/277954',
            },
            {
              id: '277954',
              zhName: '我的青春恋爱物语果然有问题 完',
              jaName: 'やはり俺の青春ラブコメはまちがっている。完',
              cover: '//lain.bgm.tv/pic/cover/c/ba/69/277954_s8qHA.jpg',
              link: 'https://bgm.tv/subject/277954',
            },
            {
              id: '277954',
              zhName: '我的青春恋爱物语果然有问题 完',
              jaName: 'やはり俺の青春ラブコメはまちがっている。完',
              cover: '//lain.bgm.tv/pic/cover/c/ba/69/277954_s8qHA.jpg',
              link: 'https://bgm.tv/subject/277954',
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
$grid-size: 8rem;
$grid-size-hover: 11.2rem;
$space-size: 0.2rem;
$transition: all 150ms ease-out;

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
    color: rgba(255, 255, 255, 0.8);
    bottom: 0;
    width: 100%;
    height: 2.1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: clip;
    padding: 0.2rem;
    background-color: rgba(0, 0, 0, 0.5);
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

  &:hover {
    height: $grid-size-hover;
    cursor: pointer;

    .anime-name {
      opacity: 0;
      transition: $transition;
    }
  }
}
</style>