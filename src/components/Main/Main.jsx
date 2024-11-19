import React, { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import { fetchPokemon } from '../../utils/api';

const Main = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    console.log(`Searching for: ${query}`);
    setLoading(true);

    try {
      
      const allPokemon = await fetchPokemon();
      const filteredPokemon = allPokemon.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredPokemon);
    } catch (error) {
      console.error('Error fetching Pokémon:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main">
      <h1>Welcome to the Pokémon App</h1>
      <SearchForm onSearch={handleSearch} />
      {loading ? (
        <Preloader />
      ) : (
        <ul>
          {searchResults.map((pokemon) => (
            <li key={pokemon.name}>{pokemon.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Main;

