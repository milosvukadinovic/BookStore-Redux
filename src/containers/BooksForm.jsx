/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions/createBook';
import { createID } from '../helper/mathID';
import { bookCategories } from '../helper/categories';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      category: 'Action',
      error: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    const { name } = event.target;

    this.setState({
      [name]: event.target.value,
    });
  }

  handleSubmit(event) {
    const { title, category } = this.state;
    if (title.length === 0) {
      window.alert('Title is nonexistant.');
    } else {
      this.setState({
        error: null,
      });
    }
    event.preventDefault();

    this.props.createBook({
      id: createID(),
      title,
      category,
    });
    this.setState({
      title: '',
      category: 'Action',
    });
  }

  render() {
    const bookOptions = bookCategories
      .map(category => <option key={category} value={category}>{category}</option>);

    return (
      <div>
        <h3>Add Book:</h3>
        <div>{this.state.error}</div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" name="title" value={this.state.title} placeholder="Title" />
          <select onChange={this.handleChange} name="category" value={this.state.category}>{bookOptions}</select>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, { createBook })(BooksForm);
