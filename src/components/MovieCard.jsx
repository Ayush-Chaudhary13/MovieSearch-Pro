import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import FavoritesButton from './FavoritesButton'

const Card = styled.article`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.15);
    
    ${Poster}::after {
      opacity: 1;
    }
  }
`

const Poster = styled.div`
  position: relative;
  padding-bottom: 150%;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Details = styled.div`
  padding: 1rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent);
`

const Title = styled.h3`
  margin: 0 0 0.3rem;
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Year = styled.span`
  font-size: 0.9rem;
  opacity: 0.9;
`

const FavoriteWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
`

const MovieCard = ({ movie, isFavorite, onToggleFavorite }) => {
  const posterUrl =
    movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Poster'

  return (
    <Card>
      <FavoriteWrapper>
        <FavoritesButton
          isFavorite={isFavorite}
          onClick={() => onToggleFavorite(movie)}
        />
      </FavoriteWrapper>
      <Link to={`/movie/${movie.imdbID}`}>
        <Poster>
          <img src={posterUrl} alt={`${movie.Title} poster`} />
        </Poster>
        <Details>
          <Title>{movie.Title}</Title>
          <Year>{movie.Year}</Year>
        </Details>
      </Link>
    </Card>
  )
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    imdbID: PropTypes.string.isRequired,
    Poster: PropTypes.string
  }).isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onToggleFavorite: PropTypes.func.isRequired
}

export default MovieCard