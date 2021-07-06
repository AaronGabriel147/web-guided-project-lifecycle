import React from 'react';

import data from '../data';
import './styles.scss';

import Pokemon from './components/Pokemon';

class App extends React.Component {
  state = {
    pokemon: data
  }

  componentDidMount() {
    console.log("App: Component Mounts");
  }

  render() {
    console.log("App: Renders DOM");
    return (
      <div className="App">
        <Pokemon pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;
