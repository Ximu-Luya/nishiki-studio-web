<template>
  <div class="header">
    <router-link id="logo" to="/">
      <img style="color: #fff; margin: 0 10px" :src="Logo" />
      Ximu Studio
    </router-link>

    <div id="topNav">
      <router-link to="/">首页</router-link>
      <router-link to="/blog">博客</router-link>
    </div>
  </div>
</template>

<script setup>
import Logo from "@/assets/logo.svg";
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  padding: 20px 13%;
  background-color: #333333;
  display: flex;
  justify-content: space-between;
  transition: 0.7s all;
  z-index: 100;
  font-size: 1.5rem;
  height: 90px;

  #logo {
    width: 520px;
    font-size: 1.75rem;
    display: flex;
    align-items: center;
    transition: inherit;

    img {
      width: 50px;
      transition: inherit;
    }
  }

  #topNav {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  a {
    color: #fff;
    font-weight: 500;
    padding: 0 30px;
  }
}

#notTop {
  box-shadow: 0px 0px 2px #333333;
  background-color: #535353;
  padding: 20px 15%;
  font-size: 1.25rem;
  height: 80px;

  #logo {
    font-size: 1.5rem;

    img {
      width: 40px;
    }
  }

  a {
    color: #fff;
    font-weight: 500;
    // font-size: 1.5rem;
    padding: 0 30px;
  }
}
</style>