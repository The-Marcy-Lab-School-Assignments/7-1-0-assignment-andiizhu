import PokemonCard from './PokemonCard';

// TODO: import the PokemonContext and useContext
import PokemonContext from '../context/PokemonContext';
import { useContext, useEffect, useState } from 'react';
import Filter from './Filter';
import PokemonForm from './PokemonForm';

const PokemonCollection = () => {
    // TODO: Replace this to get the pokemon from PokemonContext
    const { allPokemon, setAllPokemon } = useContext(PokemonContext) // use destructing on hook `useContext` to access the context value in PokemonContext
    const [filteredPokemon, setFilteredPokemon] = useState(allPokemon) // `useState` hook used to track Pokemon that are filtered based the search input form

    useEffect(() => {setFilteredPokemon(allPokemon)}, [allPokemon]) // `useEffect` hook that updates the filteredPokemon state when allPokemon changes

    const handleFilter = (query) => { // callback function to handle filtering, takes in the query from search input
        const lowerCaseQuery = query.toLowerCase(); // convert the query parameter to lowercase
        const filtered = allPokemon.filter((e) => e.name.toLowerCase().includes(lowerCaseQuery)) // create a variable to store filteredArray, wherein each element's (object) lowercase value in  key "name" includes the letters that are in the query, which is the current value from the input search form
        setFilteredPokemon(filtered) // update the filteredPokemon state with the filtered array
    }

    const handleAdd = (newPokemon) => { // callback function to handle adding pokemon to allPokemon
        setAllPokemon((curr) => [...curr, newPokemon]) // set the allPokemon state to include the new Pokemon, by spreading the exist data, and adding the new Pokemon.
    }

    return (
        <div>
            <PokemonForm onAddPokemon={handleAdd}/> {/* onAddPokemon prop to handle adding pokemon to allPokemon upon submission of the form, also allows the PokemonFrom Component to pass the newPokemon object to handleAdd. It's going from child to parent*/}
            <br />
            <Filter onFilter={handleFilter}/> {/* onFilter prop to handle filtering based on search, also allows the Filter Component to pass the search input value to handleFilter. It's going from child to parent */}
            <br />
            <div className="ui six cards">
                {filteredPokemon?.map(pokemon => <PokemonCard key={pokemon.id} imgFront={pokemon.front} name={pokemon.name} hp={pokemon.hp} imgBack={pokemon.back}/>)} {/*render each element inside of filteredPokemon*/}
            </div>
        </div>
    )
}

export default PokemonCollection