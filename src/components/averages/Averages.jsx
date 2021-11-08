import PropTypes from 'prop-types';
import styles from './Averages.module.css';

const Averages = ({ height, mass }) => {
  return (
    <div className={styles.Averages}>
      <p>Average Height: {height}</p>
      <p>Average Mass: {mass}</p>
    </div>
  );
};

Averages.propTypes = {
  height: PropTypes.number.isRequired,
  mass: PropTypes.number.isRequired
};

export default Averages;
