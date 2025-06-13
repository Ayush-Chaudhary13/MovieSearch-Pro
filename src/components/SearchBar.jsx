import { useState, useEffect } from 'react'
import styled from 'styled-components'

const SearchContainer = styled.div`
  margin: 2rem auto;
  width: 90%;
  max-width: 600px;
  position: relative;
`

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    box-shadow: 0 4px 15px rgba(74, 144, 226, 0.2);
  }
`

const SearchIcon = styled.span`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
`

const ClearButton = styled.button`
  position: absolute;
  right: 50px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: #999;
  padding: 0 0.5rem;

  &:hover {
    color: #666;
  }
`

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('')

  const handleClear = () => {
    setQuery('')
    onSearch('')
  }

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  useEffect(() => {
    if (query.trim()) {
      onSearch(query)
    }
  }, [query, onSearch])

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for movies..."
      />
      <SearchIcon>🔍</SearchIcon>
      {query && <ClearButton onClick={handleClear}>×</ClearButton>}
    </SearchContainer>
  )
}

export default SearchBar