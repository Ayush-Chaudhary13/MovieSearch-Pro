import styled from 'styled-components'
import PropTypes from 'prop-types'

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => props.isFavorite ? '#ff4081' : '#ccc'};
  font-size: ${props => props.size === 'large' ? '1.5rem' : '1.2rem'};
  transition: color 0.3s;

  &:hover {
    color: #ff4081;
  }
`

const FavoritesButton = ({ isFavorite, onClick, size = 'normal' }) => {
  return (
    <Button isFavorite={isFavorite} onClick={onClick} size={size}>
      {isFavorite ? '♥' : '♡'}
    </Button>
  )
}

FavoritesButton.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['normal', 'large'])
}

export default FavoritesButton