import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [pokemon, getPokemon] = useState([]);
  const [search, setSearch] = useState('');

  async function load(){}

  useEffect(() => {
    load();
  }, [search]);

  handleSubmit(e) {
    e.preventDefault();
    load();
    setSearch('');
  }

  return <div className="App">

  </div>;
}

export default App;
