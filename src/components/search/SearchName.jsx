import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchName = ({ setSearchTerm }) => {

  const [searchName, setSearchName] = useState('');

  const onSearchNameChange = ({ target }) => {
    setSearchName(target.value);
  };

  const onSearchNameSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(searchName);
  };

  return (
    <form onSubmit={onSearchNameSubmit}>
      <label htmlFor="name">
        <input
          id="name"
          type="text"
          placeholder="Search by name"
          value={searchName}
          onChange={onSearchNameChange}
        />
      </label>
      <button>Search</button>
      {/* <button>Reset</button> */}
    </form>
  );
};

SearchName.propTypes = {
  currentPage: PropTypes.number.isRequired,
  setCharacters: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
  setSearchTerm: PropTypes.func.isRequired
};

export default SearchName;
