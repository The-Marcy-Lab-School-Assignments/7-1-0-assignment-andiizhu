import { useEffect, useState } from "react";
import handleFetch from '../utils/handleFetch';
import PokemonContext from './PokemonContext'

// TODO: Import the PokemonContext

const starterPokemon = [
    // FEEDBACK: I would like for you to come back to this and fix it. This should not in pack the initial render of the page.
    // look in the PokemonCollection.jsx file to see how the data is loaded in. Think about when is the data being loaded in and how you can make it so the render by the initial data.
    // This is only if you have the time for it. Other than that this is great!
    // I decided to comment this out because it was impacting my initial render for front and back image.
    {
        id: 0,
        name: "butterfree 1",
        hp: 60,
        front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png"
    },
    {
        id: 1,
        name: "butterfree 2",
        hp: 60,
        front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png"
    },
    {
        id: 2,
        name: "butterfree 3",
        hp: 60,
        front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png"
    }
]

const PokemonProvider = ({ children }) => {
    const [allPokemon, setAllPokemon] = useState(starterPokemon);
    const [error, setError] = useState(null)

    // TODO: use useEffect to fetch data from the local JSON server (remember to start JSON server!)
    useEffect(() => {
        const firstFetch = async () => {
            const [data, error] = await handleFetch("http://localhost:4000/pokemon")
            if (data) setAllPokemon(data)
            if (error) setError(error)
        } 
        firstFetch()
    }, [])
    
    console.log(allPokemon)
    // TODO: Add values to be included in the context here
    let contextValues = {allPokemon, setAllPokemon}

    // TODO: Wrap the {children} in the PokemonContext.Provider and provide the values above
    return (
        <PokemonContext.Provider value={contextValues}>
            { children }
        </PokemonContext.Provider>
    )
}

export default PokemonProvider;