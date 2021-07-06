import React from 'react';
import axios from 'axios';

class App extends React.Component {

  state = {
    dogImages: []
  }

  componentDidMount() {
    axios.get('https://dog.ceo/api/breed/hound/images')
      .then(res => {
        console.log(res);
      });
  }

  render() {
    return (<div>
      <h1>Dog Search Form v1.0</h1>
      <form>
        <input />
        <button>Fetch Dogs</button>
      </form>
      <div>
        {
          this.state.dogImages.map((image) => {
            return (<img width="300" src={image} />)
          })
        }
      </div>
    </div>);
  }
}

export default App;