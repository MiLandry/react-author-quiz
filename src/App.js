import React, { Component } from 'react';
import './App.css';
import BookList from './components/BookList';



class App extends Component {
    data = [
        {
            name: 'Mark Twain',
            imageUrl : '/public/images/twain.jpg',
            books: ['The Adventures of Huckleberry Finn']
        },
        {
            name: 'Charles Dickens',
            imageUrl : '/public/images/dickens.jpg',
            books: ['A Tale of Two Cities']
        },
        {
            name: 'William Shakespeare',
            imageUrl : '/public/images/Shakespeare.jpg',
            books: ['Hamlet']
        },
        {
            name: 'Heny david Thoreau',
            imageUrl : '/public/images/thoreau.jpg',
            books: ['Walden Pond']
        },
        {
            name: 'Emily Dickinson',
            imageUrl : '/public/images/dickinson.png',
            books: ['A Clock Stopped']
        },
        {
            name: 'Harper Lee',
            imageUrl : '/public/images/lee.jpg',
            books: ['To Kill a Mockingbird']
        },
    ];

    books = [
    this.data[0].books[0]
    ];


  render() {
    return (
      <div className="App">
      <h1>Author Quiz</h1>
      <h2> Select the book written by the author shown </h2>
      <BookList books ={this.books}/>
      <footer> Copyright hamsterofdark </footer>
      </div>
    );
  }
}

export default App;
