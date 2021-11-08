import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchName.module.css';

const SearchName = ({ setSearchTerm, setCharacters, setCurrentPage }) => {

  const [searchName, setSearchName] = useState('');

  const onSearchNameChange = ({ target }) => {
    setSearchName(target.value);
  };

  const onSearchNameSubmit = (e) => {
    e.preventDefault();
    setCharacters({
      count: 0,
      previous: '',
      next: '',
      characters: []
    });
    setCurrentPage(1);
    setSearchTerm(searchName);
  };

  return (
    <form className={styles.SearchName} onSubmit={onSearchNameSubmit}>
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
  setSearchTerm: PropTypes.func.isRequired,
  setCharacters: PropTypes.func.isRequired,
  setCurrentPage: PropTypes.func.isRequired
};

export default SearchName;
