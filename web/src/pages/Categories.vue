<template>
  <Header />
  <Banner />
  <section class="blog-list-container">
    <div class="blog-list-board">
      <div class="blog-list">
        <div class="blog-item" v-for="item in blogs">
          <div v-if="item.isDirectory" class="directory">
            <span>></span>
            <RouterLink :to="`/categories${item.path}`">{{ item.title }}</RouterLink>
            <span>{{ item.amount }}</span>
          </div>
          <div v-else class="file">
            <RouterLink :to="`/blog${item.path}`">{{ item.title }}</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router'
import Header from '../components/Header.vue'
import Banner from '../components/PageBanner.vue'
import take from '../utils/request.js'
import { ref, watchEffect } from 'vue'

const route = useRoute() 
const blogs = ref([])

watchEffect(async () => {
  try {
    const path = route.params.path && `/${route.params.path.join('/')}`
    blogs.value = await take.get(`/blog${path}`)
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