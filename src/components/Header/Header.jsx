// import React from 'react';
// import './Header.css'
// import Navigation from '../Navigation/Navigation';

// const Header = () => {
//   return (
//     <header className="header">
//       <h1 className="header__title">PokéDex</h1>
//       <Navigation />
//     </header>
//   );
// }

// export default Header;

import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <header className="header">
      <h2 className="header__title">PokéDex</h2>
      <Navigation />
    </header>
  );
};

export default Header;
