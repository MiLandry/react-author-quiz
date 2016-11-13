import React, { Component } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

class Book extends Component {
  render() {
    return (
      <div className="row">
      <div className="col-md-4"> {this.props.data}</div>
      </div>
    );
  }
}

export default Book;
