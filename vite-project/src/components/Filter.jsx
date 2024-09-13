// TODO: Make this a controlled component. On each stroke of the key, it should filter the displayed pokemon
import { useState } from "react"

const Filter = ({onFilter}) => { // prop received from parent Component (PokemonCollection) to handle filtering
    const [query, setQuery] = useState("") // hook `useState` on keep track of the input value

    const handleChange = (e) => { // event handler that is called when input value changes
        //The event is an object, and the "target" key contains the input value
        setQuery(e.target.value) // update the query state with the current input value
        onFilter(e.target.value) // calls the onFilter (prop) with the current input value, used for filtering the Pokemon names in the parent Component
        console.log(query)
    }

    return (
        <div className="ui search">
            <div className="ui icon input">
                <input className="prompt" placeholder="Search by Name..." value={query} onChange={handleChange}/> {/* value prop is what is displayed, set it equal to query. onChange prop calls handleChange when input changes */}
                <i className="search icon" />
            </div>
        </div>
    )
}

export default Filter