import React from 'react';
import Poki from './Poki';

class Pokemon extends React.Component {
  componentDidMount() {
    console.log("Pokemon: Component Mounts");
  }

  render() {
    console.log("Pokemon: Renders DOM");
    return (
      <>
        {this.props.pokemon.map(pokemon => (
          <Poki key={pokemon.id} pokemon={pokemon} />
        ))}
      </>
    );
  }
}

export default Pokemon;
