import React from 'react';
import SingleBook from './SingleBook';

const BookList = ({ books, selectedBookAsin, onBookSelect }) => (
  <div className="row">
    {books.map((book) => (
      <div className="col-sm-6 col-md-4 mb-4" key={book.asin}>
        <SingleBook
          book={book}
          isSelected={book.asin === selectedBookAsin}
          onClick={() => onBookSelect(book.asin)}
        />
      </div>
    ))}
  </div>
);

export default BookList;
