const API_KEY = 'f6f63cf02074194d12ae73b07e646232'

const requests = {
  fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=id`,
  fetchNetflixOriginals : `/discover/tv?api_key=${API_KEY}&with_network=123&language=id`,
  fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=id`,
  fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies : `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries : `/discover/movie?api_key=${API_KEY}&with_genres=99`
}

export default requests