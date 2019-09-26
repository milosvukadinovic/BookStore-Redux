/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions/RemoveBook';
import { changeFilter } from '../actions/changeFilter';
import CategoryFilter from '../components/categoryFilter';

const filteredBooks = (books, filter) => {
  if (filter === 'All') {
    return books;
  }
  return books.filter(book => book.category === filter);
};

const BooksList = props => {
  const {
    changeFilter, removeBook, filter,
  } = props;

  const handleFilterChange = event => changeFilter(event.target.value);

  const booky = filteredBooks(props.books, filter).map(book => (
    <Book key={book.id} book={book} handleBookRemove={removeBook} />));

  return (
    <div>
      <CategoryFilter handleFilterChange={handleFilterChange} />
      <div>{booky}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.books,
  filter: state.filter,
});

BooksList.propTypes = {
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      category: PropTypes.string,
    }),
  ).isRequired,
};


export default connect(mapStateToProps, { changeFilter, removeBook })(BooksList);
