import mockApiData from '../mocks/mockApiData.json';

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

});
