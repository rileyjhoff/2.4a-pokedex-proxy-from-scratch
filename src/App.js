import './App.css';
import { useState, useEffect } from 'react';
import { getPokemon } from './services/fetch-utils';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState('');

  async function load() {
    const pokemon = await getPokemon();
    setPokemon(pokemon.data.results);
  }

  useEffect(() => {
    load();
  }, [search]);

  function handleSubmit(e) {
    e.preventDefault();
    load();
    setSearch('');
  }

  return (
    <div className="App">
      {pokemon.map((pokemon) => (
        <div key={pokemon._id}>
          <h1>{pokemon.pokemon}</h1>
        </div>
      ))}
    </div>
  );
}

export default App;
