import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Hello, world, my prop is {this.props.foo}</h1>
      </div>
    );
  }
}

export default App;
