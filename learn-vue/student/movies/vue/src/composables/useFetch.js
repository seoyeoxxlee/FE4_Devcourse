import axios from 'axios'
const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTJhNjk4NTIwZjY1ZjZjNzFmMDZhMjRmNTdkZGQ2NyIsIm5iZiI6MTc0NTQ2MzAxMy4wMjgsInN1YiI6IjY4MDlhNmU1Nzc4YjQ2MjY3MzljZjJiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kx-PV3TsWe8oUioSKAIqad7dScPGkiJfJgcxGPhse7M',
  },
})

export async function useFetch(url, method = 'get', payload, headers = {}) {
  try {
    const options = {
      url,
      method,
      headers,
    }

    if (method === 'get' && payload) options.params = payload
    if (method !== 'get' && payload) options.data = payload

    const response = await axiosInstance(options)
    return response
  } catch (e) {
    console.error(e)
  }
}
