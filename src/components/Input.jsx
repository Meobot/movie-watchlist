// render "exploring" on startup, then conditionally render out cards after search.
// if nothing is found, render error message

export default function Input() {

    function render() {
        console.log("Button got booped")
    }

    return (
        <div className="input--container">
            <img className="input--mag" src="/magnifier.png" alt="image of a magnifier" />
            <input 
                type="text" 
                className="input--field" 
                placeholder="Search for a movie"
            />
            <button onClick={render} className="input--btn">Search</button>
        </div>
    )
}