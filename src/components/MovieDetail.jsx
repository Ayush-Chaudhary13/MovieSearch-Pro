import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import FavoritesButton from './FavoritesButton'

const DetailContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Poster = styled.div`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`

const Info = styled.div`
  h1 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
`

const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
  color: #666;
`

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const Plot = styled.p`
  line-height: 1.6;
  margin-bottom: 1.5rem;
`

const BackButton = styled(Link)`
  display: inline-block;
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  background-color: #f0f0f0;
  border-radius: 4px;
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0;
  }
`

const FavoriteButtonWrapper = styled.div`
  display: inline-block;
  margin-left: 1rem;
`

const MovieDetail = ({ movie, isFavorite, onToggleFavorite }) => {
  const posterUrl =
    movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Poster'

  return (
    <DetailContainer>
      <Poster>
        <img src={posterUrl} alt={`${movie.Title} poster`} />
      </Poster>
      <Info>
        <BackButton to="/">← Back to Search</BackButton>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h1>{movie.Title} ({movie.Year})</h1>
          <FavoriteButtonWrapper>
            <FavoritesButton
              isFavorite={isFavorite}
              onClick={() => onToggleFavorite(movie)}
              size="large"
            />
          </FavoriteButtonWrapper>
        </div>
        <Meta>
          <MetaItem>{movie.Rated}</MetaItem>
          <MetaItem>{movie.Runtime}</MetaItem>
          <MetaItem>{movie.Genre}</MetaItem>
          {movie.imdbRating && (
            <MetaItem>
              ⭐ {movie.imdbRating}/10
            </MetaItem>
          )}
        </Meta>
        <Plot>{movie.Plot}</Plot>
        <div>
          <h3>Director</h3>
          <p>{movie.Director}</p>
        </div>
        <div>
          <h3>Actors</h3>
          <p>{movie.Actors}</p>
        </div>
        <div>
          <h3>Awards</h3>
          <p>{movie.Awards}</p>
        </div>
      </Info>
    </DetailContainer>
  )
}

MovieDetail.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    Rated: PropTypes.string,
    Runtime: PropTypes.string,
    Genre: PropTypes.string,
    Director: PropTypes.string,
    Actors: PropTypes.string,
    Plot: PropTypes.string,
    Poster: PropTypes.string,
    imdbRating: PropTypes.string,
    Awards: PropTypes.string
  }).isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onToggleFavorite: PropTypes.func.isRequired
}

export default MovieDetail