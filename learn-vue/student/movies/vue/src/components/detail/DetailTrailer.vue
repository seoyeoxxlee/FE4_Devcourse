<script setup>

import { computed } from 'vue'

const props = defineProps({
  movieTrailer: Array,
  loading: Boolean,
})

const movieTrailer = computed(() => {
  if (props.movieTrailer?.length > 0 && props.movieTrailer[0].site && props.movieTrailer[0].key) {
    return props.movieTrailer[0].site.toLowerCase() === 'youtube' 
    ? 'https://www.youtube.com/embed/' + props.movieTrailer[0].key 
    : 'https://player.vimeo.com/video/' + props.movieTrailer[0].key
  }
  return null
})
</script>
  
<template>
  <section class="trailer">
    
    <iframe
    v-if="!props.loading && movieTrailer"
    width="900"
    height="506"
    :src="movieTrailer"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    ></iframe>
    
    <iframe
      v-else
      class="skeleton-list-item"
      width="900"
      height="506"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </section>
</template>
  
<style scoped>
  
</style>