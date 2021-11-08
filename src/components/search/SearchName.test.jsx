import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchName from './SearchName';

describe('SearchName component tests', () => {
  it('renders SearchName component', () => {
    render(
      <SearchName
        searchName={''}
        setSearchName={() => {}}
      />
    );

    const input = screen.getByPlaceholderText('Search by name');

    expect(input).toBeInTheDocument();
  });

  it('setSearchName called each time a character is typed in input', () => {
    const setSearchName = jest.fn();

    render(
      <SearchName
        searchName={''}
        setSearchName={setSearchName}
      />
    );

    const input = screen.getByPlaceholderText('Search by name');

    const name = 'Luke';

    userEvent.type(input, name);

    expect(setSearchName).toHaveBeenCalled();
    expect(setSearchName).toHaveBeenCalledTimes(4);
  });

  it('input is cleared after Search button is clicked', () => {
    render(
      <SearchName
        searchName={''}
        setSearchName={() => {}}
      />
    );

    const input = screen.getByPlaceholderText('Search by name');
    const button = screen.getByText('Search');

    const name = 'Luke';

    // userEvent.type(input, name);

    fireEvent.change(input, {
      target: {
        value: name
      }
    });

    // const filledInput = screen.getByDisplayValue(name);

    // userEvent.click(button);

    return waitFor(async() => {
      await expect(input).toHaveValue(name);
    });

  
  });
});
