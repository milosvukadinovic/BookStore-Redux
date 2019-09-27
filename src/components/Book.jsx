/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import { randomAuthor } from '../helper/randomAuthor';
import { number } from '../helper/number';
import '../style/book.css';

const Book = props => {
  const { book } = props;
  const x = number();
  return (
    <div className="bookContainer row">
      <div className="FirstColumn column">
        <span className="bookCategory">{book.category}</span>
        <br />
        <span className="bookTitle">{book.title}</span>
        <br />
        <span className="bookAuthor">{randomAuthor()}</span>
        <br />
        <div className="bottomText">
          <span className="bookComment">Comment</span>
          <a className="bookRemove" role="link" style={{ cursor: 'pointer' }} onClick={() => props.handleBookRemove(book)}>Remove</a>
          <span className="bookEdit">Edit</span>
        </div>
      </div>
      <div className="SecondColumn column">
        <div className="row">
          <div className="circle-image" />
          <div className="percentageInfo">
            <span className="bookPercentage">
              {x.percentage}
              %
            </span>
            <br />
            <span className="bookCompleted">Completed</span>
          </div>

        </div>

      </div>
      <div className="ThirdColumn column">
        <span className="bookCurrent">Current Chapter:</span>
        <br />
        <span className="bookChapter">
        Chapter
          {x.chapter}
        </span>
        <br />
        <button type="button" className="bookUpdate">UPDATE PROGRESS</button>
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
