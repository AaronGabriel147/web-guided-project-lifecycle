import React from 'react';
import axios from 'axios';

const getDogs = (breed) => {
  return axios.get(`https://dog.ceo/api/breed/${breed}/images`)
    .then(res => {
      return (res.data.message);
    });
}

class App extends React.Component {

  state = {
    dogImages: [],
    breed: ""
  }

  getDogs = (breed) => {
    axios.get(`https://dog.ceo/api/breed/${breed}/images`)
      .then(res => {
        this.setState({
          dogImages: res.data.message
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    getDogs('husky')
      .then(res => {
        this.setState({
          dogImages: res.data.message
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    //if we have updated our dogimages from our state
    //if we also have searched for chihuahua
    if (prevState.dogImages !== this.state.dogImages) {
      if (this.state.breed === 'chihuahua') {
        getDogs('husky')
          .then(res => {
            this.setState({
              dogImages: res.data.message
            });
          });
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
    getDogs(this.state.breed)
      .then(res => {
        this.setState({
          dogImages: res.data.message
        });
      });
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