import { useFetch } from '@/composables/useFetch'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMovieStore = defineStore('movie', () => {
  // 현재 상영중인 영화 목록
  const moviePlayingList = ref([])
  const moviePlayingListLoading = ref(false)
  const getMoviePlaying = async (page = 1) => {
    try {
      moviePlayingListLoading.value = true
      const response = await useFetch('/movie/now_playing', 'get', {
        language: 'ko',
        page,
      })
      moviePlayingList.value = response.data.results
      moviePlayingListLoading.value = false
    } catch (e) {
      console.error(e)
    }
  }

  // 인기 있는 영화 목록
  const moviePopularList = ref([])
  const moviePopularListLoading = ref(false)
  const getMoviePopular = async (page = 1) => {
    try {
      moviePopularListLoading.value = true
      const response = await useFetch('/movie/popular', 'get', {
        language: 'ko',
        page,
      })
      moviePopularList.value = response.data.results
      moviePopularListLoading.value = false
    } catch (e) {
      console.error(e)
    }
  }

  // 개봉 예정 영화
  const movieUpComingList = ref([])
  const movieUpComingListLoading = ref(false)
  const getMovieUpComing = async (page = 1) => {
    try {
      movieUpComingListLoading.value = true
      const response = await useFetch('/movie/upcoming', 'get', {
        language: 'ko',
        page,
      })
      movieUpComingList.value = response.data.results
      movieUpComingListLoading.value = false
    } catch (e) {
      console.error(e)
    }
  }

  // 평점 높은 영화
  const movieTopRatedList = ref([])
  const movieTopRatedListLoading = ref(false)
  const getMovieTopRated = async (page = 1) => {
    try {
      movieTopRatedListLoading.value = true
      const response = await useFetch('/movie/top_rated', 'get', {
        language: 'ko',
        page,
      })
      movieTopRatedList.value = response.data.results
      movieTopRatedListLoading.value = false
    } catch (e) {
      console.error(e)
    }
  }

  // 더보기
  let movieTotalPages = 500 // 500 Max
  const movieMoreList = ref([])
  const movieMoreListLoading = ref(false)
  const newMoreLoading = ref(false) // 더보기 했을 때의 로딩
  const getMovieMore = async (page = 1, type = 'now_palying', query = '') => {
    if (movieTotalPages < page) return 
    if (page === 1) movieMoreListLoading.value = true
    if (page > 1) newMoreLoading.value = true
    try {
      movieMoreListLoading.value = true
      let response = null
      if (query === '') {
        response = await useFetch(`/movie/${type}`, 'get', {
          language: 'ko',
          page,
        })
      } else {
        response = await useFetch(`search/movie`, 'get', {
          language: 'ko',
          query,
          page,
        })
      }
      movieTotalPages = Math.min(500, response.data.tital_pages) // 500과 total_pages 중에 작은 걸 선택하여 movieTotalPages를 세팅
      movieMoreList.value = [...movieMoreList.value, ...response.data.results]
      movieMoreListLoading.value = false
      newMoreLoading.value = false
    } catch (e) {
      console.error(e)
    }
  }

  // 무비 디테일 트레일러
  const movieTrailerList = ref([]);
  const movieTrailerListLoading = ref(true)
  const getMovieTrailer = async(id) => {
    try {
      movieTrailerListLoading.value = true
      const response = await useFetch(`/movie/${id}/videos`, 'get')
      movieTrailerList.value = response.data.results
      movieTrailerListLoading.value = false
    } catch (e) {
      console.error(e)
    }
  }
  
  // 무비 디테일 인포
  // API Object고 results에 담겨있지 않음
  const movieDetailList = ref([])
  const movieDetailListLoading = ref(true)
  const getMovieDetail = async (id) => {
    try {
      movieDetailListLoading.value = true
      const response = await useFetch(`/movie/${id}`, 'get', {
        language: 'ko'
      })
      movieDetailList.value = response.data
      movieDetailListLoading.value = false
    } catch (e) {
      console.error(e)
    }
  }

  // 무비 크레딧
  const movieCreditList = ref([])
  const movieCreditListLoading = ref(true)
  const getMovieCredit = async (id) => {
    try {
      movieCreditListLoading.value = true
      const response = await useFetch(`/movie/${id}/credits`, 'get', {
        language: 'ko'
      })
      movieCreditList.value = response.data
      movieCreditListLoading.value = false
    } catch (e) {
      console.error(e)
    }
  }

  // 관련 장르
  const movieDiscoverList = ref([])
  const movieDiscoverListLoading = ref(true)
  const getMovieDiscover = async (genres) => {
    try {
      movieDiscoverListLoading.value = true
      const response = await useFetch(`/discover/movie`, 'get', {
        language: 'ko',
        with_genres: genres,
      })
      movieDiscoverList.value = response.data.results
      movieDiscoverListLoading.value = false
    } catch (e) {
      console.error(e)
    }
  }

  return {
    moviePlayingList,
    moviePlayingListLoading,
    getMoviePlaying,

    moviePopularList,
    moviePopularListLoading,
    getMoviePopular,

    movieUpComingList,
    movieUpComingListLoading,
    getMovieUpComing,

    movieTopRatedList,
    movieTopRatedListLoading,
    getMovieTopRated,

    movieMoreList,
    movieMoreListLoading,
    getMovieMore,

    newMoreLoading,

    movieTrailerList,
    movieTrailerListLoading,
    getMovieTrailer,

    movieDetailList,
    movieDetailListLoading,
    getMovieDetail,

    movieCreditList,
    movieCreditListLoading,
    getMovieCredit,

    movieDiscoverList,
    movieDiscoverListLoading,
    getMovieDiscover,
  }
})