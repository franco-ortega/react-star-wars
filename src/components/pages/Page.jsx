import PropTypes from 'prop-types';
import styles from './Page.module.css';

const Page = ({ pageNumber, setCurrentPage }) => {

  const onPageClick = () => {
    console.log(`Page ${pageNumber} clicked.`);
    setCurrentPage(pageNumber);
  };

  return (
    <div
      className={styles.Page}
      onClick={onPageClick}
    >
      {pageNumber}
    </div>
  );
};

Page.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired
};

export default Page;
