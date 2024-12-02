import React, { Component } from 'react';

class CommentArea extends Component {
  state = {
    comments: [], 
  };

  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      
      this.fetchComments();
    }
  }

  fetchComments = () => {
    if (!this.props.asin) return; 

    fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzRkYjY3OWM5MjI4ZDAwMTVmYWQzM2IiLCJpYXQiOjE3MzMxNDYyMzQsImV4cCI6MTczNDM1NTgzNH0.guXLdiLrRlj41ufLjVCC0lcQB9TJ95hXsDvd3YhMlnY', 
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Errore nel recupero dei commenti');
        }
      })
      .then((comments) => {
        this.setState({ comments });
    })
    .catch((error) => {
      console.error('Errore di rete:', error);
    });
};

render() {
  return (
    <div>
      <h5>Commenti</h5>
      {!this.props.asin && <p>Seleziona un libro per visualizzare i commenti.</p>}
      {this.state.comments.length > 0 ? (
        <ul className="list-unstyled">
          {this.state.comments.map((comment) => (
            <li key={comment._id} className="mb-2">
              <strong>Rate:</strong> {comment.rate} - {comment.comment}
            </li>
          ))}
        </ul>
      ) : (
        this.props.asin && <p>Nessun commento disponibile per questo libro.</p>
      )}
    </div>
  );
}
}

export default CommentArea;