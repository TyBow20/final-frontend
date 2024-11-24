import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <h1>About This Project</h1>
      <p>
        Welcome to the Pokémon App! This project uses the <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">PokeAPI</a> to display Pokémon data, allowing users to search, browse, and learn more about their favorite Pokémon.
      </p>
      <h2>Features</h2>
      <ul>
        <li>Fetch Pokémon data from the PokeAPI.</li>
        <li>Search for specific Pokémon.</li>
        <li>View detailed stats, abilities, and more for each Pokémon.</li>
      </ul>
      <h2>About the Developer</h2>
      <p>
        Hi! I'm Tyler, a web developer passionate about building fun and interactive web apps. This project was created to demonstrate React skills and API integration.
      </p>
    </div>
  );
};

export default About;