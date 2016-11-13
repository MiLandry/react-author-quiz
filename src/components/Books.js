import React, { Component } from 'react';
import Book from './Book';

class Books extends Component {
  render() {
    return (
      <div className="Books">
      <Book data={this.props.data}/>
      </div>
    );
  }
}

export default Books;
