<template>
  <section class="banner">
    <div class="banner-img">
      <img class="banner-overlay" src="@/assets/img/banner-overlay.png" />
    </div>
    <div class="banner-content">
      
    </div>
  </section>
</template>

<script setup>
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
    
  }
}
</style>