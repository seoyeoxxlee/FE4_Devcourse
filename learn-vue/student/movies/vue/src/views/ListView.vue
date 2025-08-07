<script setup>
import ListMovie from '@/components/list/ListMovie.vue';
import { useMovieStore } from '@/stores/movie';
import { storeToRefs } from 'pinia';
import { onBeforeUnmount, onMounted } from 'vue';
import { useRoute } from 'vue-router';

let page = 1
const route = useRoute()
const type = route.params.type
const keyword = route.query.keyword

const movieStore = useMovieStore()
const { movieMoreList, movieMoreListLoading, newMoreLoading } = storeToRefs(movieStore)

let debounceTimer = null
const onScroll = () => {
  if (debounceTimer) clearTimeout(debounceTimer)
  debounceTimer = setTimeout(() => {
    console.log('scroll')
    const nearBottom = window.innerHeight + window.scrollY + 100 > document.documentElement.offsetHeight // 100은 임의의 숫자값
    //  스크롤이 맨 밑에 도달했을 때
    if (nearBottom) {
      movieStore.getMovieMore(++page, type, keyword)
    }
  }, 200)
}

onMounted(() => {
  movieStore.getMovieMore(page, type, keyword)
  window.addEventListener('scroll', onScroll)
})

onBeforeUnmount(() => {
  movieMoreList.value = []
  window.removeEventListener('scroll', onScroll)
})

</script>
  
<template>
  <ListMovie 
    :movies="movieMoreList" 
    :loading="movieMoreListLoading"
    :more-loading="newMoreLoading"
  />
</template>
  
<style scoped>
  
</style>