import React from 'react';
import '../style/App.css';
import BooksList from './BooksList';
import BooksForm from './BooksForm';

const App = () => (
  <div className="App">
    <div className="App-header">
      <div className="logo">Bookstore</div>
      <div className="span">Books: </div>
      <BooksList />
      <div className="span">Categories: </div>
      <BooksForm />
    </div>
  </div>
);

export default App;
