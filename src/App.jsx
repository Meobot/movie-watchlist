import React from "react";
import Header from "./components/Header";
import MovieCard from "./components/Card";
import SearchField from "./components/Search";
import { useState, useEffect } from "react"

export default function App() {
	const [movieData, setMovieData] = useState([])
	const [searchValue, setSearchValue] = useState("")

	const getMovieData = async (searchValue) => {
	const url = `http://www.omdbapi.com/?apikey=bc882678&s=${searchValue}`

	const response = await fetch(url)
	const responseJson = await response.json()

	if (responseJson.Search) {
		setMovieData(responseJson.Search)
	}
}

	useEffect(() => {
		getMovieData(searchValue)
	}, [searchValue])

	const movie = movieData.map(item => {
		return (
			<MovieCard 
				{...item}
			/>
		)
	})


	return (
		<div className="App">
		<Header />
		<SearchField 
			searchValue={searchValue} 
			setSearchValue={setSearchValue}
		/>
		{movie}
		</div>
	)
}
