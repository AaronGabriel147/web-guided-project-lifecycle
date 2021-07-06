import React from 'react';
import axios from 'axios';

class App extends React.Component {

  state = {
    dogImages: [],
    breed: ""
  }

  componentDidMount() {
    axios.get('https://dog.ceo/api/breed/husky/images')
      .then(res => {
        this.setState({
          dogImages: res.data.message
        })
      });
  }

  handleChange = (e) => {
    this.setState({
      breed: e.target.value
    })
  }

  handleSubmit = (e) => {
    console.log("here!!");
  }

  //add in state for breed
  //setup onChange to put user input into breed
  //setup onSubmit to do axios call on breed to the api
  //set the state with our resultant response

  render() {
    return (<div>
      <h1>Dog Search Form v1.0</h1>
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} />
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