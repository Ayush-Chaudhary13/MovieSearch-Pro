import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieDetails } from '../api/movieApi'
import MovieDetail from '../components/MovieDetail'
import { useMovies } from '../context/MovieContext'
import LoadingPlaceholder from '../components/LoadingPlaceholder'
import ErrorMessage from '../components/ErrorMessage'

const MoviePage = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { isFavorite, toggleFavorite } = useMovies()

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true)
        setError(null)
        const data = await getMovieDetails(id)
        setMovie(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchMovie()
  }, [id])

  if (loading) {
    return <LoadingPlaceholder count={1} />
  }

  if (error) {
    return <ErrorMessage message={error} />
  }

  if (!movie) {
    return <ErrorMessage message="Movie not found" />
  }

  return (
    <MovieDetail
      movie={movie}
      isFavorite={isFavorite(movie.imdbID)}
      onToggleFavorite={toggleFavorite}
    />
  )
}

export default MoviePage