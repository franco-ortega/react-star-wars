import React, { useEffect, useState } from 'react';
import { getCharacters } from '../../services/getCharacters';
import Header from '../header/Header';
import Loading from '../loading/Loading';
import CharacterList from '../characters/CharacterList';
import Averages from '../averages/Averages';

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

  return (
    <div data-testid="app">
      <Header />
      {loading && <Loading />}
      {characters.count &&
      <>
        <CharacterList characters={characters.characters} />
        <Averages
          height={characters.averageHeight()}
          mass={characters.averageMass()}
        />
      </>
      }
    </div>
  );
};

export default App;
