import React from "react";
import Header from "./components/Header";
import MovieCard from "./components/Card";
// import Input from "./components/Input";
import { useState, useEffect } from "react"

export default function App() {
  const [movieData, setMovieData] = useState([])

  const getMovieData = async () => {
    const url = `http://www.omdbapi.com/?apikey=bc882678&s=star wars`

    const response = await fetch(url)
    const responseJson = await response.json()

    if (responseJson.Search) {
      setMovieData(responseJson.Search)
    }
  }

  useEffect(() => {
    getMovieData()
  }, [])
  
  const movie = movieData.map(item => {
    return (
      <MovieCard 
        Title={item.Title}
        // Poster={item.Poster}
        // Rating={item.Rating}
      />
    )
  })

  return (
    <div className="App">
      <Header />
      {movie}
    </div>
  )
}
