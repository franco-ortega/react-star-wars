import Character from './Character';
import PropTypes from 'prop-types';
import styles from './CharacterList.module.css';

const CharacterList = ({ characters }) => {

  const charactersToDisplay = characters.map((character, index) => (
    <Character
      key={index}
      hue={index * 35}
      name={character.name}
      gender={character.gender}
      hairColor={character.hairColor}
      mass={character.mass}
      height={character.height}
    />
  ));

  return (
    <ul className={styles.CharacterList}>
      {charactersToDisplay}
    </ul>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired
};

export default CharacterList;
