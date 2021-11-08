import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchName from './SearchName';

describe('SearchName component tests', () => {
  it('renders SearchName component', () => {
    render(
      <SearchName
      searchTerm={''}
      setSearchTerm={() => {}}
      setCurrentPage={() => {}}
      />
    );

    const input = screen.getByPlaceholderText('Search by name');

    expect(input).toBeInTheDocument();
  });

  it('setSearchTerm is called when Search button is clicked', () => {
    const setSearchTerm = jest.fn();

    render(
      <SearchName
      searchTerm={''}
        setSearchTerm={setSearchTerm}
        setCurrentPage={() => {}}
      />
    );

    const button = screen.getByText('Search');
    const input = screen.getByPlaceholderText('Search by name');

    userEvent.type(input, 'Luke');
    userEvent.click(button);

    expect(setSearchTerm).toHaveBeenCalled();
  });

});
