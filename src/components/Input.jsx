import React, { useState } from 'react';
import Card from "./Card";

export default function Input() {
    
    const apiKey = "bc882678"
    
    const [inputValue, setInputValue] = useState('')
    const [apiResponse, setApiResponse] = useState('')
    const encodedInput = encodeURIComponent(inputValue)

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${encodedInput})`)
            const data = await response.json()
            setApiResponse(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="input--container">
            <img className="input--mag" src="/magnifier.png" alt="image of a magnifier" />
            <input 
                type="text"
                value={inputValue}
                onChange={(event) => handleInputChange(event)}
                className="input--field" 
                placeholder="Search for a movie"
            />
            <button 
                className="input--btn"
                onClick={handleSubmit}
                >Search</button>
                <Card apiResponse={apiResponse}/>
        </div>
    )
}

