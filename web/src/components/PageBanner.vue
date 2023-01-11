<template>
  <section class="banner">
    <div class="banner-img"></div>
    <div class="banner-content">
      <div class="title-container">
        <div class="page-title white-text">BLOGS</div>
        <div class="page-subtitle">
          <span class="left line"></span>
          <div class="subtitle-text white-text">记我所想</div>
          <span class="right line"></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
// 封面
.banner {
  height: 460px;
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
    height: 100%;
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 40px;
    
    .title-container {
      display: flex;
      flex-direction: column;
      text-align: center;

      .page-title {
        font-family: Oswald;
        font-size: 44px;
      }
      .page-subtitle {
        font-size: 16px;

        .line {
          display: inline-block;
          height: 1px;
          margin: 0 auto;
          position: absolute;
          top: 50%;
          width: 100px;
          overflow: hidden;
          border-bottom-style: solid;
          width: 100%;
          max-width: 100%;
          border-bottom-width: 2px;
          border-bottom-color: #379cf4;
          &.left {
            right: 100%;
            margin-right: 20px;
          }
          &.right {
            left: 100%;
            margin-left: 20px;
          }
        }
      }
    }
  }
}
</style>