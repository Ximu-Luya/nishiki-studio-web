<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>


<style lang="scss" scoped>
.parent {
  height: 100px;
  width: 100%;
  background-color: orange;

  .child {
    height: 30px;
    width: 100%;
    background-color: red;
  }
}
</style>