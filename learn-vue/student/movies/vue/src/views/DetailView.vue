<script setup>
import DetailInfo from '@/components/detail/DetailInfo.vue';
import DetailTrailer from '@/components/detail/DetailTrailer.vue';
import MainMovie from '@/main/MainMovie.vue';
import { useMovieStore } from '@/stores/movie';
import { storeToRefs } from 'pinia';
import { computed, onBeforeUnmount, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const movieStore = useMovieStore()
const {
    movieTrailerList, 
    movieTrailerListLoading,
    movieDetailList,
    movieDetailListLoading,
    movieCreditList,
    movieCreditListLoading,
    movieDiscoverList,
    movieDiscoverListLoading,
  } = storeToRefs(movieStore)

onMounted(() => {
  const id = route.params.id
  movieStore.getMovieTrailer(id)
  movieStore.getMovieDetail(id)
  movieStore.getMovieCredit(id)
})

const genre = computed(() => {
  return movieDetailList.value.genres?.map((v) => v.id).join(',') || ''
})

watch(genre, (newValue) => {
  movieStore.getMovieDiscover(newValue)
})

const detailList = computed(() => {
  return movieDiscoverList.value.filter((v) => v.id !== Number(route.params.id))
})

onBeforeUnmount(() => {
  movieDetailList.value = []
  movieDetailListLoading.value = true
  movieDiscoverListLoading.value = true 
})

</script>
  
<template>
  <DetailTrailer 
    :movie-trailer="movieTrailerList"  
    :loading="movieTrailerListLoading"
  />
  <DetailInfo 
    :movie-detail="movieDetailList"
    :loading="movieDetailListLoading"
    :credit="movieCreditList"
    :credit-loading="movieCreditListLoading"
  />
  <MainMovie
    v-if="detailList && detailList.length > 0"
    title="비슷한 장르의 영화"
    sub-title="Relative Movies"
    type="relative"
    :movies="detailList"
    :loading="movieDiscoverListLoading"
  />
</template>
  
<style scoped>
  
</style>