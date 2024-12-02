import React, { Component } from 'react';
import BookList from './Components/BookList';
import CommentArea from './Components/CommentArea';
import books from './data/fantasy.json'; 

class EpiBooks extends Component {
  state = {
    selectedBookAsin: null, 
  };

  selectBook = (asin) => {
    this.setState({ selectedBookAsin: asin }); 
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8">
            
            <BookList books={books} selectedBookAsin={this.state.selectedBookAsin} onBookSelect={this.selectBook} />
          </div>
          <div className="col-md-4">
           
            <CommentArea asin={this.state.selectedBookAsin} />
          </div>
        </div>
      </div>
    );
  }
}

export default EpiBooks;