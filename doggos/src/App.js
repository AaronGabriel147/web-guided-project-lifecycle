import React from 'react';
import axios from 'axios';

class App extends React.Component {
  render() {
    const dogImages = [
      "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
      "https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg",
      "https://images.dog.ceo/breeds/hound-afghan/n02088094_1023.jpg",
      "https://images.dog.ceo/breeds/hound-afghan/n02088094_10263.jpg",
      "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
      "https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg",
      "https://images.dog.ceo/breeds/hound-afghan/n02088094_1023.jpg",
      "https://images.dog.ceo/breeds/hound-afghan/n02088094_10263.jpg"
    ];

    return (<div>
      <h1>Dog Search Form v1.0</h1>
      <form>
        <input />
        <button>Fetch Dogs</button>
      </form>
      <div>
        {
          dogImages.map((image) => {
            return (<img width="300" src={image} />)
          })
        }
      </div>
    </div>);
  }
}

export default App;