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
          ...this.state,
          dogImages: res.data.message
        })
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("change of state");
    //if we have updated our dogimages from our state
    //if we also have searched for chihuahua
    if (prevState.dogImages !== this.state.dogImages) {
      console.log("change of dogimage");
      if (this.state.breed === 'chihuahua') {
        console.log("searching for chihuahua")
      }
      // axios.get('https://dog.ceo/api/breed/husky/images')
      //   .then(res => {
      //     this.setState({
      //       ...this.state,
      //       dogImages: res.data.message
      //     })
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
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
    axios.get(`https://dog.ceo/api/breed/${this.state.breed}/images`)
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