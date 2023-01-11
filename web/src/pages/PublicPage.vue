<template>
  <div id="public-container">
    <PublicHeader></PublicHeader>
    <router-view></router-view>
    <PublicFooter></PublicFooter>
  </div>
</template>

<script setup>
import PublicHeader from '../components/PublicHeader.vue'
import PublicFooter from '../components/PublicFooter.vue'
</script>
