import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  text-align: center;
  padding: 4rem 2rem;
`

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`

const HomeLink = styled(Link)`
  color: #4a90e2;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`

const NotFoundPage = () => {
  return (
    <Container>
      <Title>404 - Page Not Found</Title>
      <p>The page you're looking for doesn't exist.</p>
      <HomeLink to="/">Go back to home</HomeLink>
    </Container>
  )
}

export default NotFoundPage