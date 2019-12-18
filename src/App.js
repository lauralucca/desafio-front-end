import React, { Component } from 'react';
import SearchContainer from './components/SearchContainer';
import PokedexContainer from './components/PokedexContainer';

class App extends Component {  
  render() {
    return (
      <div className="App">
        <header>
          <h1>gotta catch 'em all!</h1>
        </header>
        <main>
            <SearchContainer />
            <PokedexContainer />
        </main>
      </div>
    );
  }
}

export default App;
