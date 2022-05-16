import React from 'react';

export default function PokemonCard({ pokemon }) {
  return (
    <div className="pokemon-card">
      <h1>{pokemon.pokemon}</h1>
    </div>
  );
}
