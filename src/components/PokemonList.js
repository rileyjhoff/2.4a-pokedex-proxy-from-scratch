import React from 'react';
import PokemonCard from './PokemonCard';

export default function PokemonList({ pokemonList }) {
  return (
    <div className="pokemon-list">
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon._id} pokemon={pokemon} />
      ))}
    </div>
  );
}
