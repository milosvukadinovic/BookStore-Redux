import React from 'react';
import '../style/App.css';
import BooksList from './BooksList';
import BooksForm from './BooksForm';

const App = () => (
  <div className="App-body">
    <div className="App-container">
      <div className="container-Header">
        <span className="logo">Bookstore CMS</span>
        <span className="spanB">BOOKS</span>
        <span className="spanC">CATEGORIES</span>
        <div className="profilePic" />
      </div>
      <div className="container-Body">
        <BooksList />
        <BooksForm />
      </div>
    </div>
  </div>
);

export default App;
