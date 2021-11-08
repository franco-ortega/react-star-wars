import Page from './Page';
import PropTypes from 'prop-types';
import styles from './PageList.module.css';

const PageList = ({ totalPages, setCurrentPage }) => {

  const pagesToDisplay = [];

  for(let i = 0; i < totalPages; i++) {
    pagesToDisplay.push(
      <Page key={i} pageNumber={i + 1} setCurrentPage={setCurrentPage} />
    );
  }

  return (
    <div className={styles.PageList}>
      {pagesToDisplay}
    </div>
  );
};

PageList.propTypes = {
  totalPages: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired
};

export default PageList;
