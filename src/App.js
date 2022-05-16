import './App.css';
import { useState, useEffect } from 'react';
import { getPokemon } from './services/fetch-utils';
import LoadingSpinner from './components/LoadingSpinner';
import PokemonList from './components/PokemonList';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function load() {
    setIsLoading(true);
    const pokemon = await getPokemon(search);
    setPokemonList(pokemon.data.results);
    setIsLoading(false);
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    load(search);
    // setSearch('');
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input value={search} onChange={(e) => setSearch(e.target.value)}></input>
        <button>Submit</button>
      </form>
      <PokemonList pokemonList={pokemonList} />
      {isLoading && <LoadingSpinner />}
    </div>
  );
}

export default App;
