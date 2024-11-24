export const fetchPokemon = (limit = 1000) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => data.results)
    .catch((error) => {
      console.error("Error fetching Pokémon:", error);
      throw error;
    });
};

// export const fetchPokemon = async (limit = 1000) => {
//   try {
//     const response = await fetch(
//       `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
//     );
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json().then((data) => data.results);
//   } catch (error) {
//     console.error('Error fetching Pokémon:', error);
//     throw error;
//   }
// };
