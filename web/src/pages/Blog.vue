<template>
  <Header />
  <Banner />
  <section class="blog-list-container">
    <div class="blog-list-board">
      <div>详情</div>
      <div v-html="blogContent"></div>
    </div>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'
import Header from '../components/Header.vue'
import Banner from '../components/PageBanner.vue'
import take from '../utils/request.js'
import markdownParse from '../utils/marked'
import { ref, watchEffect } from 'vue'

const route = useRoute() 
const blogContent = ref("")

watchEffect(async () => {
  try {
    const rawContent = await take.get(`${route.fullPath}.md`)
    blogContent.value = markdownParse(rawContent)
  } catch (err) {}
})
</script>

<style lang="scss" scoped>
.blog-list-container {
  margin: 0 auto;
  max-width: 1140px;

  .blog-list-board {
    margin-top: -2rem;
    padding: 3rem 0;
    background-color: white;
    transition: background-color 0.2s ease-in-out;
    border-radius: 0.5rem;
    z-index: 3;
    -webkit-box-shadow: 0 12px 15px 0 rgb(0 0 0 / 24%), 0 17px 50px 0 rgb(0 0 0 / 19%);
    box-shadow: 0 12px 15px 0 rgb(0 0 0 / 24%), 0 17px 50px 0 rgb(0 0 0 / 19%);
  }

  .blog-list {
    max-width: 83.333333%;
    margin: 0 auto;
  }
}
</style>