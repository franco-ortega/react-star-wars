import React from 'react';
import Page from './Page';
import PropTypes from 'prop-types';
import styles from './PageList.module.css';

const PageList = ({ totalPages, currentPage, setCurrentPage }) => {

  const pagesToDisplay = [];

  for(let i = 0; i < totalPages; i++) {
    pagesToDisplay.push(
      <Page key={i} pageNumber={i + 1} setCurrentPage={setCurrentPage} />
    );
  }

  return (
    <div className={styles.PageList}>
      <ul>
        {pagesToDisplay}
      </ul>
      <p>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(prevState => prevState - 1)}
        >Previous</button>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(prevState => prevState + 1)}
        >Next</button>
      </p>
    </div>
  );
};

PageList.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired
};

export default PageList;
