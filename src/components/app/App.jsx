import Header from '../header/Header';
import SearchName from '../search/SearchName';
import PageList from '../pages/PageList';
import Loading from '../loading/Loading';
import CharacterList from '../characters/CharacterList';
import Averages from '../averages/Averages';
import NoResults from '../characters/NoResults';
import { useCharacters } from '../../hooks/useCharacters';

import React from 'react';

const App = () => {
  const {
    loading,
    searchTerm,
    setSearchTerm,
    currentPage,
    setCurrentPage,
    characters
  } = useCharacters();

  return (
    <div data-testid="app">
      <Header />
      <SearchName
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setCurrentPage={setCurrentPage}
      />
      {characters.count > 0 &&
      <PageList
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={characters.totalPages()}
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
