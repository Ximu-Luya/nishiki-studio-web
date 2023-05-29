<template>
  <section class="banner">
    <div class="banner-img">
      <img class="banner-overlay" src="@/assets/img/banner-overlay.png" />
    </div>
    <div class="banner-content">
      <!-- 左侧封面内容 -->
      <div class="content-layer">
        <!-- 主标题 -->
        <div class="title">
          <span class="title-text white-text">
            随心所欲<br>
            做自己想做的事
          </span>
        </div>
        <!-- 副标题 -->
        <div class="brief white-text">
          <span class="brief-item">人不为别人而活</span>
          <span class="brief-item">工作是为了更好地生活</span>
          <span class="brief-item">每一个奇思妙想，我都想记录下来并把它实现</span>
        </div>
        <!-- 结语 -->
        <div class="end white-text">OPTIMIZE THE WORLD</div>

        <div class="beian">
          <a href="https://beian.miit.gov.cn/">京ICP备2022028203号-2</a>
        </div>
      </div>

      <!-- 右侧封面内容 -->
      <div class="content-layer">
        <div class="info-item white-text" v-for="item in infoData">
          <a class="info-title" :href="item.herf" target="_blank">
            {{ item.title }}
          </a>
          <div class="info-value">{{ item.discription }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
const infoData = reactive([
  {
    title: '码了个码',
    discription: '仿照羊了个羊实现的小游戏（不简单）',
    herf: 'http://game1.ximustudio.top'
  },
  {
    title: 'AI散兵GPT实时语音',
    discription: '拥有散兵的记忆，模仿散兵的口吻，使用散兵的声音，现在与散宝开始对话吧！',
    herf: 'http://sanbing.ximustudio.top'
  },
  {
    title: '忆灵',
    discription: '记忆是情感的基石，通过忆灵用记忆创造独属于你的“灵魂”吧！',
    herf: 'http://yiling.ximustudio.top'
  }
])
</script>

<style lang="scss" scoped>
// 封面
.banner {
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;

  // 封面底图
  .banner-img {
    background-image: url(@/assets/img/banner.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: scroll;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0; bottom: 0;

    // 封面遮罩图
    .banner-overlay {
      position: absolute;
      bottom: 0; left: 0;
      width: 100%;
    }
  }

  // 封面内容
  .banner-content {
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    padding: 0 40px;

    // 封面内容容器
    .content-layer {
      width: 50%;
      padding-top: 30vh;
    }

    // 大标题
    .title {
      min-height: 350px;
      .title-text {
        font-family: 微軟正黑體;
        font-size: 70px;
        font-weight: bold;
      }
    }
    // 副标题/简介
    .brief {
      padding-top: 20px;
      .brief-item {
        display: block;
        letter-spacing: 1px;
        line-height: 30px;
      }
    }
    // 结语
    .end {
      padding-top: 35px;
      font-family: Oswald;
      font-size: 20px;
      font-weight: bold;
      letter-spacing: 1px;
    }

    // 备案
    .beian {
      width: 100%;
      padding: 20px 0;

      a {
        color: white;
      }
    }
    
    .info-item {
      padding-left: 10px;
      &:not(:first-child) {
        padding-top: 35px;
      }

      .info-title {
        letter-spacing: 2px;
        font-size: 26px;
        font-weight: 600;
        color: white;
        font-family: 'pingfang SC,helvetica neue,arial,hiragino sans gb,microsoft yahei ui,microsoft yahei,simsun,sans-serif';
      }
      .info-value {
        font-size: 16px;
        font-family: Oswald;
      }
    }
  }
}
</style>