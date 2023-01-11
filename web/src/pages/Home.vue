<template>
  <div class="home-page">
    <section class="banner">
      <img src="@/assets/img/banner.png" class="banner-img" />
      <img src="@/assets/img/banner-overlay.png" class="banner-overlay" />
      <div class="intro"></div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  display: flex;
}

// 封面
.banner {
  height: 100vh;
  width: 100%;
  position: relative;

  // 封面底图
  .banner-img {
    height: 100%;
    width: 100%;
  }

  // 封面遮罩图
  .banner-overlay {
    position: absolute;
    bottom: 0; left: 0;
    width: 100%;
  }
}
</style>