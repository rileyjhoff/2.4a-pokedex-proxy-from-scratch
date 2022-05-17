import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { getPokemon } from './services/fetch-utils';
import LoadingSpinner from './components/LoadingSpinner';
import PokemonList from './components/PokemonList';
import SearchForm from './components/SearchForm';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function load() {
    setIsLoading(true);
    const pokemon = await getPokemon(search);
    setPokemonList(pokemon.data.results);
    console.log(pokemon.data.results);
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
      <SearchForm handleSubmit={handleSubmit} search={search} setSearch={setSearch} />
      <PokemonList pokemonList={pokemonList} />
      {isLoading && <LoadingSpinner />}
    </div>
  );
}

export default App;
