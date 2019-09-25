import React from 'react';
import { connect } from 'react-redux';

const bookCategories = [
  'Action',
  'Advanture',
  'History',
  'Horror',
  'Sci-Fi',
  'Romance',
  'Thriller',
  'Mystery',
];

const BooksForm = () => {
  const bookOptions = bookCategories.map((category) => (
    <option key={`book-category-${category}`} value={category}>
      {category}
    </option>
  ));

  return (
    <div>
      <h3>Add Book:</h3>
      <form>
        <input type="text" name="title" />
        <select name="category">{bookOptions}</select>
        <input type="submit" />
      </form>
    </div>
  );
};

export default connect()(BooksForm);
