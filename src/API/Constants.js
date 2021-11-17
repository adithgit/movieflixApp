const API_KEY = "5c5fc8e4970bc727849fa7f399841562"
export const baseURL = `https://api.themoviedb.org/3`
export const trendingURL = `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
export const imageURL  = `https://image.tmdb.org/t/p/original`
export const actionURL = `/discover/movie?api_key=${API_KEY}&page=1&with_genres=28`
export const thrillerURL = `/discover/movie?api_key=${API_KEY}&with_genres=53`
export const dramaURL = `/discover/movie?api_key=${API_KEY}&page=1&with_genres=18`
export const seriesURL = `/discover/tv?api_key=${API_KEY}&language=en-US`
export const comedyURL = `/discover/movie?api_key=${API_KEY}&with_genres=35`

// https://api.themoviedb.org/3/genre/tv/list?api_key=[MY_KEY]&language=en-US