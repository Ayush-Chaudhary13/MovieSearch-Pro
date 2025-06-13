import styled from 'styled-components'
import PropTypes from 'prop-types'

const PlaceholderGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
  padding: 1rem 0;
`

const PlaceholderCard = styled.div`
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  border-radius: 12px;
  height: 0;
  padding-bottom: 150%;
  animation: shimmer 1.5s infinite linear;
  
  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`

const LoadingPlaceholder = ({ count }) => {
  return (
    <PlaceholderGrid>
      {Array.from({ length: count }).map((_, index) => (
        <PlaceholderCard key={index} />
      ))}
    </PlaceholderGrid>
  )
}

LoadingPlaceholder.propTypes = {
  count: PropTypes.number.isRequired
}

export default LoadingPlaceholder