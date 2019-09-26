/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import '../style/book.css';

const Book = props => {
  const { book } = props;

  return (
    <div className="panel">
      <div className="bookBox">
        <h2>{book.title}</h2>
        <h5>{book.category}</h5>
        <div className="meta"><button type="button" onClick={() => props.handleBookRemove(book)}>Remove Book</button></div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  handleBookRemove: PropTypes.func.isRequired,
};

export default Book;
