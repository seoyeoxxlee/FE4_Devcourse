const url = "https://api.themoviedb.org/3";

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTJhNjk4NTIwZjY1ZjZjNzFmMDZhMjRmNTdkZGQ2NyIsIm5iZiI6MTc0NTQ2MzAxMy4wMjgsInN1YiI6IjY4MDlhNmU1Nzc4YjQ2MjY3MzljZjJiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kx-PV3TsWe8oUioSKAIqad7dScPGkiJfJgcxGPhse7M'
    }
};

// 캐싱 처리!! 24시간 => 한 번 들어가본 페이지는 모두 캐시가 된다.
const revalidateOption = {
    next: {
        revalidate: 60 * 60 * 24,
    },
};

  // 영화 정보를 조회하는 api
export const getMovieData = async (path: string, genres= "") => {
    // await new Promise((resolve) => setTimeout(resolve, 5000))
    if (path === "discover/movie") {
        return await (await fetch(`${url}/${path}?with_genres=${genres}`, {
            ...options, 
            ...revalidateOption,
        })).json();
    } else {
        return await (await fetch(`${url}/movie/${path}`, {
            ...options, 
            ...revalidateOption,
        })).json();
    }
}

// video를 조회하는 api
export const getMovieVideoData = async (id: string) => {
    // await new Promise((resolve) => setTimeout(resolve, 5000))
    return await (await fetch(`${url}/movie/${id}/videos`, {
        ...options, 
        ...revalidateOption,
    })).json();
}

// detail api
export const getMovieDetailData = async (id: string) => {
    // await new Promise((resolve) => setTimeout(resolve, 5000))
    return await (await fetch(`${url}/movie/${id}`, {
        ...options, 
        ...revalidateOption,
    })).json();
}

// credit api
export const getMovieCreditData = async (id: string) => {
    // await new Promise((resolve) => setTimeout(resolve, 5000))
    return await (await fetch(`${url}/movie/${id}/credits`, {
        ...options, 
        ...revalidateOption,
    })).json();
}

// movie list api
export const getMovieMoreData = async (
    page = 1,
    type = "now_playing",
    keyword = ""
  ) => {
    if (keyword) {
      return await (
        await fetch(
          `${url}/search/movie?query=${encodeURIComponent(keyword)}&page=${page}`,
          options
        )
      ).json();
    } else {
      return await (
        await fetch(`${url}/movie/${type}?page=${page}`, {
            ...options, 
            ...revalidateOption,
        }
      )).json();
    }
  };
  