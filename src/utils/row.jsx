import axios from "./instance"
import { useState, useEffect } from "react"
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer"
import './row.css'


const baseUrl = 'https://image.tmdb.org/t/p/original'

export default function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState('')

  useEffect(() => {
    async function fetchData(){
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [fetchUrl])

  const opts = {
    height: '390',
    width: '99%',
    playerVars: {
      autoplay: 0
    }
  }

  const handleClick = (movie) => {
    if(trailerUrl){
      setTrailerUrl('')
    }else{
      movieTrailer(movie?.title || '')
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search)
          setTrailerUrl(urlParams.get('v'))
        })
        .catch((err) => console.log(err))
    }
  }

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row_posters'>
        {movies.map(movie => {
          return <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
            src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        })}
      </div>
      <div style={{
        padding: '48px'
      }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  )
}