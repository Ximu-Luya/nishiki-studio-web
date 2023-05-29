<template>
  <header class="top-header" :class="{'fixed-header': showFixedHeader}">
    <div class="logo-bar">
      <img src="@/assets/img/logo-bar.png" />
      <div class="sub-title">西木是西木野的西木</div>
    </div>
    <nav class="nav-bar">
      <RouterLink to="/" class="nav-item white-text">首页</RouterLink>
      <a href="https://blog.csdn.net/qq_33866817" target="_blank" class="nav-item white-text">文章</a>
      <!-- <RouterLink to="/categories" class="nav-item white-text">文章</RouterLink>
      <RouterLink to="/about" class="nav-item white-text">关于我</RouterLink> -->
      <a href="https://github.com/Ximu-Luya" target="_blank" class="nav-item white-text">关于我</a>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'

const showFixedHeader = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset
    if(scrollTop > 80) showFixedHeader.value = true
    else showFixedHeader.value = false
  })
})
</script>

<style lang="scss" scoped>
header {
  padding: 0 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 10;

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

.top-header {
  position: absolute;
  top: 0; 
  height: 80px;
}

.fixed-header {
  position: fixed;
  background-color: orange;
  top: 0; 
  height: 60px;
  transition: background-color 0.5s;
}

// logo区
.logo-bar {
  z-index: 11;
  padding: 10px 0;
  img {
    display: block;
    height: 80%;
  }
  .sub-title {
    color: white;
    font-size: 14px;
    margin-top: -5px;
    letter-spacing: 2px;
  }
}

.nav-bar {
  display: flex;
  align-items: center;

  .nav-item {
    margin: 0 10px;
    padding: 10px 20px;
    font-weight: bold;
  }
}
</style>