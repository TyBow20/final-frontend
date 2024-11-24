
// import React from 'react';
// import '../App/App.css'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import Header from '../Header/Header';
// import Footer from '../Footer/Footer';
// import Main from '../Main/Main';
// import PokemonPage from '../PokemonPage/PokemonPage'; 
// import About from '../About/About'; 

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Switch>
//         <Route exact path="/" component={Main} />
//         <Route path="/pokemon" component={PokemonPage} />
//         <Route path="/about" component={About} />
//       </Switch>
//       <Footer />
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import PokemonPage from '../PokemonPage/PokemonPage';
import About from '../About/About';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="app__main-content">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/pokemon" component={PokemonPage} />
          <Route path="/about" component={About} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
