// import axios from 'axios';

// export const fetchPokemon = async (limit = 20) => {
//   const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
//   return response.data.results;
// };

export const fetchPokemon = async (limit = 1000) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
    );

    // Check if the response is successful (HTTP status 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json(); // Parse JSON data
    return data.results; // Return the Pokémon list
  } catch (error) {
    console.error("Error fetching Pokémon:", error);
    throw error; // Re-throw error so it can be handled by the calling code
  }
};
