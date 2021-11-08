import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import mockApiData from '../../mocks/mockApiData.json';
import CharacterList from './CharacterList';
import { CharacterList as CharListClass } from '../../models/CharacterList';

const server = setupServer(
  rest.get('https://swapi.dev/api/people/?page=1', (req, res, ctx) => {
    return res(ctx.json(mockApiData));
  })
);

describe('CharacterList test', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('renders fetched characters', () => {
    const characterList = new CharListClass(mockApiData);

    render(
      <CharacterList
        characters={characterList.characters}
      />
    );

    return waitFor(() => {
      expect(screen.getByText('Luke Skywalker').toBeInTheDocument());
    });

  });

});
