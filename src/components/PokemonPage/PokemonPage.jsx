// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const PokemonPage = () => {
//   const [pokemon, setPokemon] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchPokemon = async () => {
//       const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
//       setPokemon(response.data.results);
//       setLoading(false);
//     };
//     fetchPokemon();
//   }, []);

//   if (loading) return <h2>Loading Pokémon...</h2>;

//   return (
//     <div>
//       <h2>Pokémon List</h2>
//       <ul>
//         {pokemon.map((poke) => (
//           <li key={poke.name}>{poke.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default PokemonPage;

import React, { useEffect, useState } from 'react';

const PokemonPage = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setPokemonList(data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Pokémon:', error);
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  if (loading) return <h2>Loading Pokémon...</h2>;

  return (
    <div>
      <h2>Pokémon List</h2>
      <ul>
        {pokemonList.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonPage;
