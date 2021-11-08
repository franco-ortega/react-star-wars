import React, { useEffect, useState } from 'react';
import { getCharacters } from '../../services/getCharacters';
import Header from '../header/Header';
import Loading from '../loading/Loading';
import CharacterList from '../characters/CharacterList';
import Averages from '../averages/Averages';
import PageList from '../pages/PageList';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [characters, setCharacters] = useState({
    count: 0,
    previous: '',
    next: '',
    characters: []
  });

  useEffect(() => {
    setLoading(true);

    getCharacters(currentPage)
      .then(res => {
        setCharacters(res);
        setLoading(false);
      });
  }, [currentPage]);

  return (
    <div data-testid="app">
      <Header />
      {loading && <Loading />}
      {characters.count && !loading &&
      <>
        <PageList
          totalPages={characters.totalPages()}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
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
