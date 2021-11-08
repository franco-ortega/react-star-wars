import { CharacterList } from '../models/CharacterList';

const API_URL = 'https://swapi.dev/api/people/';

export const searchCharacters = async(currentPage, searchTerm) => {
  return await fetch(`${API_URL}?search=${searchTerm}&page=${currentPage}`)
    .then(res => res.json())
    .then(res => {
      return new CharacterList({
        count: res.count,
        results: res.results
      });
    });
};
