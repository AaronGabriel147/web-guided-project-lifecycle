import React from 'react';
import axios from 'axios';

class App extends React.Component {
  render() {
    const dogImages = [

    ];

    return (<div>
      <h1>Dog Search Form v1.0</h1>
      <form>
        <input />
        <button>Fetch Dogs</button>
      </form>
      <div>
        <img src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg" />
        <img src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg" />
        <img src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg" />
        <img src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg" />
        <img src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg" />
        <img src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg" />
      </div>
    </div>);
  }
}

export default App;