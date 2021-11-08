import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchName from './SearchName';

describe('SearchName component tests', () => {
  it('renders SearchName component', () => {
    render(
      <SearchName
        searchName={searchName}
        setSearchName={() => {}}
      />
    );

    const input = screen.getByPlaceholderText('Seach by name');

    expect(input).toBeInTheDocument();
  });

  it('setSearchName called each time a character is typed in input', () => {
    const setSearchName = jest.fn();

    render(
      <SearchName
        searchName={searchName}
        setSearchName={setSearchName}
      />
    );

    const input = screen.getByPlaceholderText('Seach by name');

    const name = 'Luke';

    userEvent.type(input, name);

    expect(setSearchName).toHaveBeenCalled();
    expect(setSearchName).toHaveBeenCalledTimes(4);
  });

  it('input is cleared after Search button is clicked', () => {
    render(
      <SearchName
        searchName={searchName}
        setSearchName={() => {}}
      />
    );

    const input = screen.getByPlaceholderText('Seach by name');
    const button = screen.getByText('Search');

    const name = 'Luke';

    userEvent.type(input, name);

    userEvent.click(button);

    expect(input.nodeValue).toBeNull();
  });
});
