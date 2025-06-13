import styled from 'styled-components'
import PropTypes from 'prop-types'

const ErrorContainer = styled.div`
  padding: 1.5rem;
  text-align: center;
  background: #fff5f5;
  border-left: 4px solid #ff4d4f;
  border-radius: 8px;
  margin: 2rem auto;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  
  svg {
    color: #ff4d4f;
    font-size: 1.5rem;
  }
  
  p {
    margin: 0;
    color: #ff4d4f;
  }
`

const ErrorMessage = ({ message }) => {
  return (
    <ErrorContainer>
      <span>⚠️</span>
      <p>{message}</p>
    </ErrorContainer>
  )
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired
}

export default ErrorMessage