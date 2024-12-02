import React from 'react';
import { Card } from 'react-bootstrap';

const SingleBook = ({ book, isSelected, onClick }) => (
  <Card
    className="h-100"
    style={{ border: isSelected ? '2px solid red' : '1px solid lightgray', cursor: 'pointer' }}
    onClick={onClick}
  >
    <Card.Img variant="top" src={book.img} style={{ height: '250px', objectFit: 'cover' }} />
    <Card.Body>
      <Card.Title className="text-truncate" title={book.title}>{book.title}</Card.Title>
    </Card.Body>
  </Card>
);

export default SingleBook;
