// import { useState } from "react"
import React from 'react'

const MovieCard = (props) => {
    return (
        <div className="Card">
            <div className="Card--img">
                <img src={props.Poster} alt="movie poster" className='Card--poster'/>
            </div>
            <div className="Card--content">
                <div className="Card--title-container">
                    <p className='movie-title'>{props.Title}</p>
                </div>
                <div className="Card--details">
                    {/* runtime, genre, watchlist button */}
                </div>
                <div className="Card--description">
                    {/* plot */}
                </div>
            </div>
        </div>    
    )
}

export default MovieCard