<template>
  <header class="top-header" :class="{'fixed-header': showFixedHeader}">
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
    height: 100%;
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