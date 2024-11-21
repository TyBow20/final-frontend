import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; 

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item"><Link to="/">Home</Link></li>
        <li className="navigation__item"><Link to="/pokemon">Pokémon</Link></li>
        <li className="navigation__item"><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
