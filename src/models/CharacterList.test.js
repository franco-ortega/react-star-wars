import mockApiData from '../mocks/mockApiData.json';
import { CharacterList } from './CharacterList';

describe('tests for CharacterList class', () => {
  it('calculates average mass of characters on current page', () => {

    const characterList = new CharacterList(mockApiData);
    const result = characterList.averageMass();

    const expectedMasses = mockApiData.results.map(character => {
      return character.mass;
    });

    const expectedAverageMass = expectedMasses.reduce((acc, cur) => {
      return acc + Number(cur);
    }, 0) / expectedMasses.length;

    expect(result).toEqual(expectedAverageMass);
  });

  it('calculates average height of characters on current page', () => {

    const characterList = new CharacterList(mockApiData);
    const result = characterList.averageHeight();

    const expectedHeights = mockApiData.results.map(character => {
      return character.height;
    });

    const expectedAverageHeight = expectedHeights.reduce((acc, cur) => {
      return acc + Number(cur);
    }, 0) / expectedHeights.length;

    expect(result).toEqual(expectedAverageHeight);
  });

  it('calculates total pages with 10 characters per page', () => {

    const characterList = new CharacterList(mockApiData);
    const result = characterList.totalPages();

    const expectedTotalPages = Math.ceil(mockApiData.count / 10);

    expect(result).toEqual(expectedTotalPages);
  });
});
