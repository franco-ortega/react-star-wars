import React, { useEffect, useState } from 'react';
// import { getCharacters } from '../../services/getCharacters';
import Header from '../header/Header';
import Loading from '../loading/Loading';
import CharacterList from '../characters/CharacterList';
import Averages from '../averages/Averages';
import PageList from '../pages/PageList';
import SearchName from '../search/SearchName';
import { searchCharacters } from '../../services/searchCharacters';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [characters, setCharacters] = useState({
    count: 0,
    previous: '',
    next: '',
    characters: []
  });

  useEffect(() => {
    setLoading(true);

    searchCharacters(searchTerm, currentPage)
      .then(res => {
        setCharacters(res);
        setLoading(false);
      });

    // getCharacters(currentPage)
    //   .then(res => {
    //     setCharacters(res);
    //     setLoading(false);
    //   });
  }, [currentPage, searchTerm]);

  return (
    <div data-testid="app">
      <Header />
      <SearchName
        setSearchTerm={setSearchTerm}
      />
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
