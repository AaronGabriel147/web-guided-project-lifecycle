import React from 'react';

import data from '../data';
import './styles.scss';

import Pokemon from './components/Pokemon';

class App extends React.Component {
  state = {
    pokemon: []
  }

  componentDidMount() {
    console.log("App: Component Mounts");
    this.setState({
      pokemon: data
    });
  }

  render() {
    console.log("App: Renders DOM");
    return (
      <div className="App">
        {this.state.pokemon.length === 0 ? <div>Loading</div> : <Pokemon pokemon={this.state.pokemon} />}
      </div>
    );
  }
}

export default App;
