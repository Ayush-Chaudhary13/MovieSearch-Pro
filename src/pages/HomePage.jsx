import { useEffect } from 'react'
import { useMovies } from '../context/MovieContext'
import SearchBar from '../components/SearchBar'
import MovieGrid from '../components/MovieGrid'
import styled from 'styled-components'

const HomeContainer = styled.div`
  padding-bottom: 3rem;
`

const SectionTitle = styled.h2`
  margin: 2rem 0 1rem;
  color: #333;
`

const HomePage = () => {
  const {
    movies,
    loading,
    error,
    totalResults,
    search,
    loadMore,
    isFavorite,
    toggleFavorite
  } = useMovies()

  // Load latest movies on first render
  useEffect(() => {
    search('avengers') // Default search term
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <HomeContainer>
      <SearchBar onSearch={search} />
      <SectionTitle>{movies.length ? 'Latest Movies' : 'Search Results'}</SectionTitle>
      <MovieGrid
        movies={movies}
        loading={loading}
        error={error}
        totalResults={totalResults}
        onLoadMore={loadMore}
        isFavorite={isFavorite}
        onToggleFavorite={toggleFavorite}
      />
    </HomeContainer>
  )
}

export default HomePage