import { createContext, useContext, useState, useEffect } from 'react'
import { searchMovies } from '../api/movieApi'

const MovieContext = createContext()

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favoriteMovies')
    return saved ? JSON.parse(saved) : []
  })

  const search = async (searchQuery, newPage = 1) => {
    if (!searchQuery.trim()) {
      setMovies([])
      setTotalResults(0)
      return
    }

    try {
      setLoading(true)
      setError(null)
      
      const { movies: newMovies, totalResults: total } = await searchMovies(searchQuery, newPage)
      
      if (newPage === 1) {
        setMovies(newMovies)
      } else {
        setMovies(prev => [...prev, ...newMovies])
      }
      
      setTotalResults(total)
      setPage(newPage)
      setQuery(searchQuery)
    } catch (err) {
      setError(err.message)
      setMovies([])
      setTotalResults(0)
    } finally {
      setLoading(false)
    }
  }

  const loadMore = () => {
    if (movies.length < totalResults) {
      search(query, page + 1)
    }
  }

  const toggleFavorite = (movie) => {
    setFavorites(prev => {
      const isFavorite = prev.some(fav => fav.imdbID === movie.imdbID)
      let newFavorites
      
      if (isFavorite) {
        newFavorites = prev.filter(fav => fav.imdbID !== movie.imdbID)
      } else {
        newFavorites = [...prev, movie]
      }
      
      localStorage.setItem('favoriteMovies', JSON.stringify(newFavorites))
      return newFavorites
    })
  }

  const isFavorite = (id) => {
    return favorites.some(movie => movie.imdbID === id)
  }

  return (
    <MovieContext.Provider
      value={{
        movies,
        query,
        loading,
        error,
        totalResults,
        favorites,
        search,
        loadMore,
        toggleFavorite,
        isFavorite
      }}
    >
      {children}
    </MovieContext.Provider>
  )
}

export const useMovies = () => useContext(MovieContext)