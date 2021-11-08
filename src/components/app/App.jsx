import React, { useEffect, useState } from 'react';
import Header from '../header/Header';
import Loading from '../loading/Loading';
import CharacterList from '../characters/CharacterList';
import Averages from '../averages/Averages';
import PageList from '../pages/PageList';
import SearchName from '../search/SearchName';
import { searchCharacters } from '../../services/searchCharacters';
import NoResults from '../characters/NoResults';

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
    searchCharacters(currentPage, searchTerm)
      .then(res => {
        setCharacters(res);
        setLoading(false);
      });
  }, [currentPage, searchTerm]);

  return (
    <div data-testid="app">
      <Header />
      <SearchName
        setSearchTerm={setSearchTerm}
        setCurrentPage={setCurrentPage}
      />
      {characters.count > 0 &&
      <PageList
        totalPages={characters.totalPages()}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      }
      {loading 
        ? <Loading />
        : characters.count 
          ? <>
            <CharacterList characters={characters.characters} />
            <Averages
              height={characters.averageHeight()}
              mass={characters.averageMass()}
            />
          </>
          : <NoResults />
      }
    </div>
  );
};

export default App;
