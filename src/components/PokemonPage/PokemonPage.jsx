

import React, { useEffect, useState } from 'react';
import { fetchPokemon } from '../../utils/api';

const PokemonPage = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPokemon(20)
      .then((pokemon) => {
        setPokemonList(pokemon);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error in PokemonPage:', error);
        setError('Failed to load Pokémon data.');
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Loading Pokémon...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <section className="pokemon-page">
      <h2 className="pokemon-page__title">Pokémon List</h2>
      <ul className="pokemon-page__list">
        {pokemonList.map((pokemon) => (
          <li key={pokemon.name} className="pokemon-page__list-item">
            {pokemon.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PokemonPage;


