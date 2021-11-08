import PropTypes from 'prop-types';
import styles from './Character.module.css';

const Character = ({
  hue,
  name,
  gender,
  hairColor,
  mass,
  height
}) => {
  return (
    <li className={styles.Character} style={{ background: `hsl(${hue}, 50%, 40%)` }}>
      <h3>{name}</h3>
      <p>Gender: {gender}</p>
      <p>Hair Color: {hairColor}</p>
      <p>Mass: {mass}</p>
      <p>Height: {height}</p>
    </li>
  );
};

Character.propTypes = {
  hue: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  hairColor: PropTypes.string.isRequired,
  mass: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired

};

export default Character;
