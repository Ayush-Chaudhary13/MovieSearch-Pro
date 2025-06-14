import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { MovieProvider } from './context/MovieContext' // Add this import

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MovieProvider> 
        <App />
      </MovieProvider>
    </BrowserRouter>
  </React.StrictMode>
)