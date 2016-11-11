import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Book from './components/Book';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Hello, world, my prop is {this.props.foo}</h1>
      <Book />
      </div>
    );
  }
}

export default App;
