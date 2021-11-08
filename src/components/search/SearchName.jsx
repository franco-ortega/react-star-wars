import React from 'react';
import PropTypes from 'prop-types';

const SearchName = ({ searchName, setSearchName }) => {

  // const onSearchNameChange = ({ target }) => {
  //   console.log('search inputted');
  //   setSearchName(target.value);
  // };

  const onSearchNameSubmit = (e) => {
    e.preventDefault();
    console.log('search submitted');
    setSearchName(e.target.value);
  };

  return (
    <form onSubmit={onSearchNameSubmit}>
      <label htmlFor="name">
        <input
          required
          id="name"
          type="text"
          placeholder="Search by name"
          value={searchName}
          // onChange={onSearchNameChange}
        />
      </label>
      <button>Search</button>
      {/* <button>Reset</button> */}
    </form>
  );
};

SearchName.propTypes = {
  searchName: PropTypes.string.isRequired,
  setSearchName: PropTypes.string.isRequired
};

export default SearchName;
