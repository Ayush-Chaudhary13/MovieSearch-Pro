import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MoviePage from './pages/MoviePage'
import NotFoundPage from './pages/NotFoundPage'
import GlobalStyles from './styles/GlobalStyles'
import styled from 'styled-components'

const AppContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
`

const Header = styled.header`
  padding: 2rem 0;
  text-align: center;
`

const Title = styled.h1`
  font-size: 2.5rem;
  color: #4a90e2;
  margin: 0;
  background: linear-gradient(135deg, #4a90e2, #6a5acd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

function App() {
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Header>
          <Title>MovieSearch Pro</Title>
        </Header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MoviePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AppContainer>
    </>
  )
}

export default App