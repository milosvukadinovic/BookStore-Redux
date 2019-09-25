/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook } from '../actions/RemoveBook';
import Book from '../components/Book';

const BooksList = props => {
  const {
    removeBook,
  } = props;

  const booky = props.books.map((book) => (
    <Book
      key={book.id}
      book={book}
      handleBookRemove={removeBook}
    />
  ));

  return (
    <div>
      <table className="tableClass">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {booky}
        </tbody>
      </table>
    </div>
  );
};


const mapStateToProps = (state, ownProps) => ({
  books: state.books,
});

BooksList.propTypes = {
  removeBook: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      category: PropTypes.string,
    }),
  ).isRequired,
};


export default connect(mapStateToProps, { removeBook })(BooksList);
