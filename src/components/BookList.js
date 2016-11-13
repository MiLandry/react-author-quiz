import React, { Component } from 'react';
import Book from './Book';

class BookList extends Component {
  render() {
    return (
      <div className="Books">
      {this.props.books.map(function (b) {
        return <Book data={b} />;
      })}
      </div>
    );
  }
}

export default BookList;
