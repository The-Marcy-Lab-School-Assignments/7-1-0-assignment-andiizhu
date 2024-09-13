import { useState } from "react"

const PokemonForm = ({onAddPokemon}) => { // prop received from parent Component (Pokemon Collection) to handle adding a new Pokemon
    const [addPokemon, setAddPokemon] = useState({ // hook `useState` to keep track of the input values, it stores all of the data in an object.
        name: "", hp: "", front: "", back: ""
    })

    const handleChange = (e) => { // event handler to update the addPokemon state when changes are made the input fields in the form 
        const {name, value} = e.target; // destructuring the name and value in the input field.
        // console.log(e.target)
        setAddPokemon((curr) => ({ // update the addPokemon state with the current input value
            ...curr, // spread the exist fields in the addPokemon state
            [name]: value // for the field that match the input's name, update the value
        }))
    }

    const handleSubmit = async (e) => { // event handler on form submission
        e.preventDefault(); // prevents page refresh on submission 

        const newPokemon = { // create the final Pokemon object based on the form data
            name: addPokemon.name,
            hp: addPokemon.hp,
            front: addPokemon.front,
            back: addPokemon.back,
        }

        try { // try catch on sending data to the Json server
            const response = await fetch('http://localhost:4000/pokemon', { // sending a fetch to the JSON server
                method: 'POST', // fetch option to add to the data in the fetch URL
                headers: {
                    'Content-Type': 'application/json', // lets the server know that the data being sent is in JSON formatting
                },
                body: JSON.stringify(newPokemon), // convert the newPokemon object to be in JSON format before sending the data to the server
            });

            if (response.ok) { // if the request is successful
                const addedPokemon = await response.json(); // Parse the JSON response for adding the new Pokemon
                onAddPokemon(addedPokemon); // Notify the parent component of the new Pokémon
                setFormState({ // Reset form fields after successful submission
                    name: '',
                    hp: '',
                    front: '',
                    back: ''
                });
            } else { // else 
                console.error('Failed to add new Pokémon'); // Logs in console that the fetch failed
            }
        } catch (error) {
            console.error('Error:', error); // Logs in console the error from the request
        }
    }



    return (
        <div>
            <h3>Add a Pokemon!</h3>
            <form className="ui form" onSubmit={handleSubmit}> {/* handles submission of the form */}
                <div className="four fields" widths="equal">
                    <div className="field ui fluid">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" value={addPokemon.name} onChange={handleChange}/> {/* when each input field is updated, the allPokemon form state updates to reflect what is in the value */}
                    </div>
                    <div className="field ui fluid">
                        <label>HP</label>
                        <input type="text" name="hp" placeholder="HP" value={addPokemon.hp} onChange={handleChange}/> {/* when each input field is updated, the allPokemon form state updates to reflect what is in the value */}
                    </div>
                    <div className="field ui fluid">
                        <label>Front Image URL</label>
                        <input type="text" name="front" placeholder="url" value={addPokemon.front} onChange={handleChange}/> {/* when each input field is updated, the allPokemon form state updates to reflect what is in the value */}
                    </div>
                    <div className="field ui fluid">
                        <label>Back Image URL</label>
                        <input type="text" name="back" placeholder="url" value={addPokemon.back} onChange={handleChange}/> {/* when each input field is updated, the allPokemon form state updates to reflect what is in the value */}
                    </div>
                </div>
                <button className="ui button" type="submit">Submit</button> 
            </form>
        </div>
    )
}

export default PokemonForm
