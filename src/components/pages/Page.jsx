import React from 'react';
import PropTypes from 'prop-types';

const Page = ({ pageNumber, setCurrentPage }) => {

  const onPageClick = () => {
    console.log(`Page ${pageNumber} clicked.`);
    setCurrentPage(pageNumber);
  };

  return (
    <div onClick={onPageClick}>
      {pageNumber}
    </div>
  );
};

Page.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired
};

export default Page;
