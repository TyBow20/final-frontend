import React, { useState } from 'react';

const SearchForm = ({ onSearch, onClear }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  const handleClear = () => {
    setQuery('');
    if (onClear) {
      onClear();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Pokémon..."
        className="search-form__input"
      />
      <button type="submit" className="search-form__button search-form__button--search">
        Search
      </button>
      <button
        type="button"
        onClick={handleClear}
        className="search-form__button search-form__button--clear"
      >
        Clear
      </button>
    </form>
  );
};

export default SearchForm;
