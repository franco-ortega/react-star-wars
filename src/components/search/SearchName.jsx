import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchName.module.css';

const SearchName = ({ setSearchTerm, setCurrentPage, searchTerm }) => {

  const [searchName, setSearchName] = useState('');

  const onSearchNameChange = ({ target }) => {
    setSearchName(target.value);
  };

  const onSearchNameSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    setSearchTerm(searchName);
  };

  const onResetClick = () => {
    setSearchName('');
    setSearchTerm('');
    setCurrentPage(1);
  };

  return (
    <form className={styles.SearchName} onSubmit={onSearchNameSubmit}>
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
      <button type="submit">Search</button>
      <button
        type="button"
        disabled={!searchTerm}
        onClick={onResetClick}
      >Reset</button>
    </form>
  );
};

SearchName.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  setCurrentPage: PropTypes.func.isRequired
};

export default SearchName;
