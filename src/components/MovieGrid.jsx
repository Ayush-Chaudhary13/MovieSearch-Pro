import styled from 'styled-components'
import MovieCard from './MovieCard'
import LoadingPlaceholder from './LoadingPlaceholder'
import ErrorMessage from './ErrorMessage'
import PropTypes from 'prop-types'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
  padding: 1rem 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 1rem;
  }
`

const LoadMoreButton = styled.button`
  display: block;
  margin: 2rem auto;
  padding: 0.8rem 1.5rem;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #357abd;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`

const MovieGrid = ({
  movies,
  loading,
  error,
  totalResults,
  onLoadMore,
  isFavorite,
  onToggleFavorite
}) => {
  if (loading && movies.length === 0) {
    return <LoadingPlaceholder count={6} />
  }

  if (error) {
    return <ErrorMessage message={error} />
  }

  if (movies.length === 0) {
    return <ErrorMessage message="No movies found. Try a different search." />
  }

  return (
    <>
      <Grid>
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            isFavorite={isFavorite(movie.imdbID)}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </Grid>
      {movies.length < totalResults && (
        <LoadMoreButton onClick={onLoadMore} disabled={loading}>
          {loading ? 'Loading...' : 'Load More'}
        </LoadMoreButton>
      )}
    </>
  )
}

MovieGrid.propTypes = {
  movies: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  totalResults: PropTypes.number.isRequired,
  onLoadMore: PropTypes.func.isRequired,
  isFavorite: PropTypes.func.isRequired,
  onToggleFavorite: PropTypes.func.isRequired
}

export default MovieGrid