import PropTypes from 'prop-types';
import styles from './Page.module.css';

const Page = ({ pageNumber, currentPage, setCurrentPage }) => {

  const onPageClick = () => {
    console.log(`Page ${pageNumber} clicked.`);
    setCurrentPage(pageNumber);
  };

  return (
    <button
      className={`
        ${styles.Page}
        ${pageNumber === currentPage && styles.Current}
      `}
      onClick={onPageClick}
    >
      {pageNumber}
    </button>
  );
};

Page.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired
};

export default Page;
