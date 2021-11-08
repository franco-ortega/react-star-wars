import { CharacterList } from '../models/CharacterList';

export const getCharacters = async(currentPage) => {
  return await fetch(`https://swapi.dev/api/people/?page=${currentPage}`)
    .then(res => res.json())
    .then(res => {
      console.log(res);
      return new CharacterList({
        count: res.count,
        next: res.next,
        previous: res.previous,
        results: res.results
      });
    });
};
