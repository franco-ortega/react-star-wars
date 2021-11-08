import { CharacterList } from '../models/CharacterList';

export const getCharacters = async(currentPage) => {
  return await fetch(`https://swapi.dev/api/people/?page=${currentPage}`)
    .then(res => res.json())
    .then(res => {
      return new CharacterList({
        count: res.count,
        results: res.results
      });
    });
};
