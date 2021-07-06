import React from 'react';
import axios from 'axios';

class App extends React.Component {

  state = {
    dogImages: [],
    breed: ""
  }


  getDogs = (breed) => {
    axios.get(`https://dog.ceo/api/breed/${breed}/images`)
      .then(res => {
        this.setState({
          ...this.state,
          dogImages: res.data.message
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getDogs('husky');
  }

  componentDidUpdate(prevProps, prevState) {
    //if we have updated our dogimages from our state
    //if we also have searched for chihuahua
    if (prevState.dogImages !== this.state.dogImages) {
      if (this.state.breed === 'chihuahua') {
        this.getDogs('husky');
      }
    }
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      breed: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.getDogs(this.state.breed);

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
            return (<img key={image} width="300" src={image} />)
          })
        }
      </div>
    </div>);
  }
}

export default App;