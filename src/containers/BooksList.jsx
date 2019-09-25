import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BooksList = (props) => {
  const { books } = props;
  const booky = books.map((book) => (
    <Book
      key={book.id}
      book={book}
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

const mapStateToProps = (state) => ({
  books: state.books,
});
BooksList.propTypes = {
  books: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps)(BooksList);
