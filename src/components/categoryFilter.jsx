import React from 'react';
import PropTypes from 'prop-types';
import { bookCategories } from '../helper/categories';

const filterCategories = ['All', ...bookCategories];
const CategoryFilter = props => {
  const { handleFilterChange } = props;
  const filterOptions = filterCategories.map(
    category => <option key={category} value={category}>{category}</option>,
  );
  return (
    <div className="categoryFilter">
      <b className="categoryFilterBy">Filter by:</b>
      <select className="categorySelect" onChange={handleFilterChange}>
        {filterOptions}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
