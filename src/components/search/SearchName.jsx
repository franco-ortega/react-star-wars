import React from 'react';
import PropTypes from 'prop-types';

const SearchName = ({ searchName, setSearchName }) => {

  const onSearchNameChange = ({ target }) => {
    setSearchName(target.value);
  };

  const onSearchNameSubmit = (e) => {
    console.log({ searchName });
    e.preventDefault();
    setSearchName('');
  };

  // console.log({ searchName });

  return (
    <form onSubmit={onSearchNameSubmit}>
      <label htmlFor="name">
        <input
          required
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
  searchName: PropTypes.string.isRequired,
  setSearchName: PropTypes.func.isRequired
};

export default SearchName;
