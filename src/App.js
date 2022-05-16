import './App.css';
import { useState, useEffect } from 'react';
import { getPokemon } from './services/fetch-utils';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function load() {
    setIsLoading(true);
    const pokemon = await getPokemon(search);
    setPokemon(pokemon.data.results);
    setIsLoading(false);
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    load(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input value={search} onChange={(e) => setSearch(e.target.value)}></input>
        <button>Submit</button>
      </form>
      {pokemon.map((pokemon) => (
        <div key={pokemon._id}>
          <h1>{pokemon.pokemon}</h1>
        </div>
      ))}
      {isLoading && <LoadingSpinner />}
    </div>
  );
}

export default App;
