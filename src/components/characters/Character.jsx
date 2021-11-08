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
  const bkgdGradient = {
    background: `linear-gradient(
      ${hue}deg,
      hsl(${hue}, 50%, 20%),
      hsl(${hue}, 70%, 30%),
      hsl(${hue}, 90%, 40%)
    )`,
    backgroundBlendMode: 'soft-light'
  };

  return (
    <li className={styles.Character} style={bkgdGradient}>
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
