import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component {
  state = {
    content: '',
    author: ''
  }

  componentDidMount() {
    this.fetchQoute();
  }

  fetchQoute = () => {
    axios.get('https://api.quotable.io/random')
      .then((response) => {
        const { content, author } = response.data;

        this.setState({ content,author });

      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">"{this.state.content}" <br/><br/>― {this.state.author} ―</h1>
          <button className="button" onClick={this.fetchQoute}>
            <span>Get Random Quote</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;