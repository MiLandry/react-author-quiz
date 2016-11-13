import React, { Component } from 'react';


class Book extends Component {
  render() {
    return (
      <div className="row">
      <div className="col-md-4"> {this.props.data[0].name}</div>
      </div>
    );
  }
}

export default Book;
