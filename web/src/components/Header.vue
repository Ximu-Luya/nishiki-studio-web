<template>
  <header>
    <div class="logo-bar">
      <img src="@/assets/img/logo-bar.png" />
    </div>
    <nav class="nav-bar">
      <RouterLink to="/" class="nav-item white-text">首页</RouterLink>
      <RouterLink to="/blog" class="nav-item white-text">文章</RouterLink>
      <RouterLink to="/about" class="nav-item white-text">关于我</RouterLink>
    </nav>
  </header>
</template>

<script>
import { RouterLink } from 'vue-router';
</script>

<style lang="scss" scoped>
header {
  padding: 0 40px;
  position: fixed;
  top: 0; 
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 10;

  // logo区
  .logo-bar {
    padding: 10px 0;
    img {
      height: 100%;
    }
  }

  .nav-bar {
    display: flex;
    align-items: center;

    .nav-item {
      margin: 0 10px;
      padding: 20px;
      font-weight: bold;
    }
  }
}
</style>