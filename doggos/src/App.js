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

    Promise.all([
      axios.get(`https://dog.ceo/api/breed/husky/images`),
      axios.get(`https://dog.ceo/api/breed/pug/images`)
    ])
      .then(resps => {
        this.setState({
          dogImages: resps[0].data.message,
          dogImages2: resps[1].data.message
        })
      })

    axios.get(`https://dog.ceo/api/breed/${breed}/images`)
      .then(res1 => {
        axios.get(`https://dog.ceo/api/breed/${breed}/images`)
          .then(res2 => {
            this.setState({
              dogImages: res1.data.message,
              dogImages2: res2.data.message
            });
          })
          .catch(err => {
            console.log(err);
          });
      })
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
    getDogs(this.state.breed)
      .then(res => {
        this.setState({
          dogImages: res
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