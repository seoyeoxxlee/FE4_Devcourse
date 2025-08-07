<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

const props = defineProps({
  title: String,
  subTitle: String,
  type: String,
  movies: Array,
  loading: Boolean,
})
</script>
<template>
  <section class="movie">
    <h3 class="movie-category">{{ props.subTitle }}</h3>
    <h4 class="movie-subtext">
      {{ props.title }} <RouterLink v-if="props.type !== 'relative'" :to="`/movie/${props.type}`">더보기</RouterLink>
    </h4>
    <div class="movie-list">
      <template v-if="props.loading">
        <div class="movie-list__item">
          <a href="#" class="skeleton-list-item ui0"> </a>
        </div>
      </template>
      <template v-else>
        <swiper
          :slides-per-view="1"
          :breakpoints="{
            '380': {
              slidesPerView: 2,
            },
            '480': {
              slidesPerView: 3,
            },
            '740': {
              slidesPerView: 4,
            },
            '980': {
              slidesPerView: 5,
            },
          }"
        >
          <swiper-slide v-for="movie in props.movies" :key="movie.id">
            <div class="movie-list__item">
              <RouterLink :to="`/detail/${movie.id}`">
                <figure>
                  <img :src="`https://image.tmdb.org/t/p/w300/${movie.poster_path}`" alt="" />
                </figure>
                <div class="movie-list__txt">
                  <div
                    class="progress-circle"
                    :class="[
                      `p${Math.floor(movie.vote_average * 10)}`,
                      { over50: Math.floor(movie.vote_average * 10) > 50 },
                    ]"
                  >
                    <span>{{ Math.floor(movie.vote_average * 10) }}%</span>
                    <div class="left-half-clipper">
                      <div class="first50-bar"></div>
                      <div class="value-bar"></div>
                    </div>
                  </div>
                  <strong class="movie-list__title">{{ movie.title }}</strong>
                  <span class="release_date">{{ movie.release_date }}</span>
                </div>
              </RouterLink>
            </div>
          </swiper-slide>
        </swiper>
      </template>
    </div>
  </section>
</template>