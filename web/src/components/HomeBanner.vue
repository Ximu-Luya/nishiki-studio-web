<template>
  <section class="banner">
    <div class="banner-img">
      <img class="banner-overlay" src="@/assets/img/banner-overlay.png" />
    </div>
    <div class="banner-content">
      <!-- 左侧封面内容 -->
      <div class="content-layer slogon">
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
      <div class="content-layer works">
        <div class="info-item white-text" v-for="item in infoData">
          <a class="info-title" :href="item.herf" target="_blank">
            {{ item.title }}
            <span class="icon">
              <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728=""><path fill="currentColor" d="M715.648 625.152 670.4 579.904l90.496-90.56c75.008-74.944 85.12-186.368 22.656-248.896-62.528-62.464-173.952-52.352-248.96 22.656L444.16 353.6l-45.248-45.248 90.496-90.496c100.032-99.968 251.968-110.08 339.456-22.656 87.488 87.488 77.312 239.424-22.656 339.456l-90.496 90.496zm-90.496 90.496-90.496 90.496C434.624 906.112 282.688 916.224 195.2 828.8c-87.488-87.488-77.312-239.424 22.656-339.456l90.496-90.496 45.248 45.248-90.496 90.56c-75.008 74.944-85.12 186.368-22.656 248.896 62.528 62.464 173.952 52.352 248.96-22.656l90.496-90.496 45.248 45.248zm0-362.048 45.248 45.248L398.848 670.4 353.6 625.152 625.152 353.6z"></path></svg>
            </span>
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
    // max-width: 1280px;
    // margin: 0 ;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0 10rem;

    // 封面内容容器
    .content-layer {
      // width: 50%;
      width: 400px;
      position: relative;
      padding: 20px;

      &.slogon{
        margin-top: 20vh;
      }

      &.works {
        margin-top: 20vh;
      }

      &::before {
        content: "";
        position: absolute;
        top: 0; bottom: 0;
        left: 0; right: 0;
        overflow: hidden;
        border-radius: 15px;
        filter: blur(10px);
        -webkit-filter: blur(10px);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        opacity: 0.8;
        z-index: 0;
      }
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

        &>.icon{
          height: 20px;
          width: 20px;
          display: inline-block;
        }
      }
      .info-value {
        font-size: 16px;
        font-family: Oswald;
      }
    }
  }
}
</style>