import React, { useEffect, useState } from 'react';

import { getCharacters } from '../../services/getCharacters';
import CharacterList from '../characters/CharacterList';
import Header from '../header/Header';
import Loading from '../loading/Loading';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState({
    count: 0,
    previous: null,
    next: 'null',
    characters: []
  });

  useEffect(() => {
    setLoading(true);

    getCharacters(1)
      .then(res => {
        console.log(res);
        setCharacters(res);
        setLoading(false);
      });
  }, []);

  console.log(characters);

  return (
    <div data-testid="app">
      <Header />
      {loading && <Loading />}
      <CharacterList characters={characters.characters} />
    </div>
  );
};

export default App;
