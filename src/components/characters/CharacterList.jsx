import React from 'react';
import PropTypes from 'prop-types';

const CharacterList = ({ characters }) => {
  const charactersToDisplay = characters.map((character, index) => (
    <Character
      key={index}
      name={character.name}
      gender={character.gender}
      hairColor={character.hairColor}
      mass={character.mass}
      height={character.height}
    />
  ));

  return (
    <main>
      {charactersToDisplay}
    </main>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired
};

export default CharacterList;
