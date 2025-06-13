import axios from 'axios'

const API_KEY = 'a7cea0c7' // Replace with your actual API key
const BASE_URL = 'https://www.omdbapi.com/'

export const searchMovies = async (query, page = 1) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        s: query,
        page,
        apikey: API_KEY,
        type: 'movie'
      }
    })
    
    if (response.data.Response === 'False') {
      throw new Error(response.data.Error || 'Unknown error occurred')
    }
    
    return {
      movies: response.data.Search,
      totalResults: parseInt(response.data.totalResults)
    }
  } catch (error) {
    throw error
  }
}

export const getMovieDetails = async (id) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        i: id,
        apikey: API_KEY,
        plot: 'full'
      }
    })
    
    if (response.data.Response === 'False') {
      throw new Error(response.data.Error || 'Unknown error occurred')
    }
    
    return response.data
  } catch (error) {
    throw error
  }
}