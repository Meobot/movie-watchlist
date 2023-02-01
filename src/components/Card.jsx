// import { useState } from "react"
import React from 'react'

const MovieCard = (props) => {
    return (
            <div className='boop'>
                <p>{props.Title}</p>
                {/* <p>{props.Poster}</p>
                <p>{props.Rating}</p> */}
            </div>
    )
}

export default MovieCard