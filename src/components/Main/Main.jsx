

// import React, { useState, useEffect } from 'react';
// import SearchForm from '../SearchForm/SearchForm';
// import Preloader from '../Preloader/Preloader';
// import { fetchPokemon } from '../../utils/api';
// import './Main.css';

// const Main = () => {
//   const [searchResults, setSearchResults] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [selectedPokemon, setSelectedPokemon] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleSearch = async (query) => {
//     console.log(`Searching for: ${query}`);
//     setLoading(true);

//     try {
//       const allPokemon = await fetchPokemon();
//       const filteredPokemon = allPokemon.filter((pokemon) =>
//         pokemon.name.toLowerCase().includes(query.toLowerCase())
//       );
//       setSearchResults(filteredPokemon);
//     } catch (error) {
//       console.error('Error fetching Pokémon:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleMouseMove = (e, card) => {
//     const rect = card.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     const centerX = rect.width / 2;
//     const centerY = rect.height / 2;

//     const rotateX = ((y - centerY) / centerY) * 20;
//     const rotateY = ((x - centerX) / centerX) * 20;

//     card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
//   };

//   const resetTransform = (card) => {
//     card.style.transition = 'transform 0.3s ease';
//     card.style.transform = 'rotateX(0deg) rotateY(0deg)';
//     setTimeout(() => {
//       card.style.transition = '';
//     }, 300);
//   };

//   const handleCardClick = (pokemon) => {
//     setSelectedPokemon(pokemon);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setSelectedPokemon(null);
//     setIsModalOpen(false);
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === 'Escape') {
//       closeModal();
//     }
//   };

//   useEffect(() => {
//     if (isModalOpen) {
//       window.addEventListener('keydown', handleKeyDown);
//     } else {
//       window.removeEventListener('keydown', handleKeyDown);
//     }

//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [isModalOpen]);

//   return (
//     <div className="main">
//       <h1 className="main__title">Welcome to the Pokémon App</h1>
//       <SearchForm onSearch={handleSearch} />
//       {loading ? (
//         <Preloader />
//       ) : (
//         <div className="main__pokemon-grid">
//           {searchResults.map((pokemon, index) => (
//             <div
//               key={index}
//               className="pokemon-card"
//               onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
//               onMouseLeave={(e) => resetTransform(e.currentTarget)}
//               onClick={() => handleCardClick(pokemon)}
//             >
//               <div className="pokemon-card__shadow"></div>
//               <h3 className="pokemon-card__name">{pokemon.name}</h3>
//               <img
//                 className="pokemon-card__image"
//                 src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
//                   pokemon.url.split('/')[pokemon.url.split('/').length - 2]
//                 }.png`}
//                 alt={pokemon.name}
//               />
//             </div>
//           ))}
//         </div>
//       )}

//       {isModalOpen && selectedPokemon && (
//         <div className="modal" onClick={closeModal}>
//           <div className="modal__content" onClick={(e) => e.stopPropagation()}>
//             <div className="modal__image-container">
//               <img
//                 className="modal__image"
//                 src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
//                   selectedPokemon.url.split('/')[selectedPokemon.url.split('/').length - 2]
//                 }.png`}
//                 alt={selectedPokemon.name}
//               />
//             </div>
//             <div className="modal__stats">
//               <h2 className="modal__title">{selectedPokemon.name}</h2>
//               <ul>
//                 <li>Height: 10</li>
//                 <li>Weight: 20</li>
//                 <li>Base Experience: 64</li>
//               </ul>
//             </div>
//             <button className="modal__close" onClick={closeModal}>
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Main;

// import React, { useState, useEffect } from 'react';
// import SearchForm from '../SearchForm/SearchForm';
// import Preloader from '../Preloader/Preloader';
// import { fetchPokemon } from '../../utils/api';
// import './Main.css';

// const Main = () => {
//   const [searchResults, setSearchResults] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [selectedPokemon, setSelectedPokemon] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Fetch the full list of Pokémon on component mount
//   useEffect(() => {
//     const fetchInitialPokemon = async () => {
//       setLoading(true);
//       try {
//         const allPokemon = await fetchPokemon();
//         setSearchResults(allPokemon);
//       } catch (error) {
//         console.error('Error fetching Pokémon:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchInitialPokemon();
//   }, []);

//   const handleSearch = async (query) => {
//     console.log(`Searching for: ${query}`);
//     setLoading(true);

//     try {
//       const allPokemon = await fetchPokemon();
//       const filteredPokemon = allPokemon.filter((pokemon) =>
//         pokemon.name.toLowerCase().includes(query.toLowerCase())
//       );
//       setSearchResults(filteredPokemon);
//     } catch (error) {
//       console.error('Error fetching Pokémon:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleClear = async () => {
//     setLoading(true);
//     try {
//       const allPokemon = await fetchPokemon(); // Fetch the full Pokémon list to reset the grid
//       setSearchResults(allPokemon);
//     } catch (error) {
//       console.error('Error refreshing Pokémon:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleMouseMove = (e, card) => {
//     const rect = card.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     const centerX = rect.width / 2;
//     const centerY = rect.height / 2;

//     const rotateX = ((y - centerY) / centerY) * 20;
//     const rotateY = ((x - centerX) / centerX) * 20;

//     card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
//   };

//   const resetTransform = (card) => {
//     card.style.transition = 'transform 0.3s ease';
//     card.style.transform = 'rotateX(0deg) rotateY(0deg)';
//     setTimeout(() => {
//       card.style.transition = '';
//     }, 300);
//   };

//   const handleCardClick = (pokemon) => {
//     setSelectedPokemon(pokemon);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setSelectedPokemon(null);
//     setIsModalOpen(false);
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === 'Escape') {
//       closeModal();
//     }
//   };

//   useEffect(() => {
//     if (isModalOpen) {
//       window.addEventListener('keydown', handleKeyDown);
//     } else {
//       window.removeEventListener('keydown', handleKeyDown);
//     }

//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [isModalOpen]);

//   return (
//     <div className="main">
//       <h1 className="main__title">Welcome to the Pokémon App</h1>
//       <SearchForm onSearch={handleSearch} onClear={handleClear} />
//       {loading ? (
//         <Preloader />
//       ) : (
//         <div className="main__pokemon-grid">
//           {searchResults.map((pokemon, index) => (
//             <div
//               key={index}
//               className="pokemon-card"
//               onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
//               onMouseLeave={(e) => resetTransform(e.currentTarget)}
//               onClick={() => handleCardClick(pokemon)}
//             >
//               <div className="pokemon-card__shadow"></div>
//               <h3 className="pokemon-card__name">{pokemon.name}</h3>
//               <img
//                 className="pokemon-card__image"
//                 src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
//                   pokemon.url.split('/')[pokemon.url.split('/').length - 2]
//                 }.png`}
//                 alt={pokemon.name}
//               />
//             </div>
//           ))}
//         </div>
//       )}

//       {isModalOpen && selectedPokemon && (
//         <div className="modal" onClick={closeModal}>
//           <div className="modal__content" onClick={(e) => e.stopPropagation()}>
//             <div className="modal__image-container">
//               <img
//                 className="modal__image"
//                 src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
//                   selectedPokemon.url.split('/')[selectedPokemon.url.split('/').length - 2]
//                 }.png`}
//                 alt={selectedPokemon.name}
//               />
//             </div>
//             <div className="modal__stats">
//               <h2 className="modal__title">{selectedPokemon.name}</h2>
//               <ul>
//                 <li>Height: 10</li>
//                 <li>Weight: 20</li>
//                 <li>Base Experience: 64</li>
//               </ul>
//             </div>
//             <button className="modal__close" onClick={closeModal}>
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Main;


import React, { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import { fetchPokemon } from '../../utils/api';
import './Main.css';

const Main = () => {
  const [searchResults, setSearchResults] = useState([]); // Start with an empty grid
  const [loading, setLoading] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleClear = () => {
    setSearchResults([]); // Clear the grid
  };

  const handleMouseMove = (e, card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 20;
    const rotateY = ((x - centerX) / centerX) * 20;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const resetTransform = (card) => {
    card.style.transition = 'transform 0.3s ease';
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    setTimeout(() => {
      card.style.transition = '';
    }, 300);
  };

  const handleCardClick = (pokemon) => {
    setSelectedPokemon(pokemon);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPokemon(null);
    setIsModalOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <div className="main">
      <h1 className="main__title">Welcome to the Pokémon App</h1>
      <SearchForm onSearch={handleSearch} onClear={handleClear} />
      {loading ? (
        <Preloader />
      ) : searchResults.length > 0 ? (
        <div className="main__pokemon-grid">
          {searchResults.map((pokemon, index) => (
            <div
              key={index}
              className="pokemon-card"
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => resetTransform(e.currentTarget)}
              onClick={() => handleCardClick(pokemon)}
            >
              <div className="pokemon-card__shadow"></div>
              <h3 className="pokemon-card__name">{pokemon.name}</h3>
              <img
                className="pokemon-card__image"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  pokemon.url.split('/')[pokemon.url.split('/').length - 2]
                }.png`}
                alt={pokemon.name}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="main__no-results">No Pokémon found. Start your search above to catch one!</p>
      )}

      {isModalOpen && selectedPokemon && (
        <div className="modal" onClick={closeModal}>
          <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            <div className="modal__image-container">
              <img
                className="modal__image"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  selectedPokemon.url.split('/')[selectedPokemon.url.split('/').length - 2]
                }.png`}
                alt={selectedPokemon.name}
              />
            </div>
            <div className="modal__stats">
              <h2 className="modal__title">{selectedPokemon.name}</h2>
              <ul>
                <li>Height: 10</li>
                <li>Weight: 20</li>
                <li>Base Experience: 64</li>
              </ul>
            </div>
            <button className="modal__close" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;

