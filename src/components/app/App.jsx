import React, { useEffect, useState } from 'react';
import { getCharacters } from '../../services/getCharacters';
import Header from '../header/Header';
import Loading from '../loading/Loading';
import CharacterList from '../characters/CharacterList';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState({
    count: 0,
    previous: '',
    next: '',
    characters: []
  });

  useEffect(() => {
    setLoading(true);

    getCharacters(1)
      .then(res => {
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
