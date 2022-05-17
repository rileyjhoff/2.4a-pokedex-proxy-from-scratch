import React from 'react';
import { Card } from 'react-bootstrap';

export default function PokemonCard({ pokemon }) {
  return (
    <div className="pokemon-card">
      <Card>
        <Card.Title>{pokemon.pokemon}</Card.Title>
        <Card.Subtitle>HP: {pokemon.hp}</Card.Subtitle>
        <Card.Subtitle>Attack: {pokemon.attack}</Card.Subtitle>
        <Card.Subtitle>Defense: {pokemon.defense}</Card.Subtitle>
        <Card.Subtitle>Special Attack: {pokemon.special_attack}</Card.Subtitle>
        <Card.Subtitle>Special Defense: {pokemon.special_defense}</Card.Subtitle>
      </Card>
    </div>
  );
}
