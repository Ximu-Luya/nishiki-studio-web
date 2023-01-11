<template>
  <div class="home-page">
    <section class="banner">
      <div class="banner-img">
        <img src="@/assets/img/banner-overlay.png" class="banner-overlay" />
      </div>
      <div class="banner-content">

      </div>
    </section>
    <section class="works"></section>
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  display: flex;
  flex-direction: column;
}

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
  }
  // 封面遮罩图
  .banner-overlay {
    position: absolute;
    bottom: 0; left: 0;
    width: 100%;
  }
}
// 作品
.works {
  height: 500px;
}
</style>