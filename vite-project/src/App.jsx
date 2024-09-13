import PokemonForm from './components/PokemonForm'
import Filter from './components/Filter'
import PokemonCollection from './components/PokemonCollection'

const App = () => {
  return (
    <div className="App ui container">
      <h1>Pokedex</h1>
      <br />
      <PokemonCollection />
    </div>
  );
}

export default App;
