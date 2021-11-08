import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchName from './SearchName';

describe('SearchName component tests', () => {
  it('renders SearchName component', () => {
    render(
      <SearchName
      setSearchTerm={() => {}}
      />
    );

    const input = screen.getByPlaceholderText('Search by name');

    expect(input).toBeInTheDocument();
  });

  it('setSearchTerm is called when Search button is clicked', () => {
    const setSearchTerm = jest.fn();

    render(
      <SearchName
        setSearchTerm={setSearchTerm}
      />
    );

    const button = screen.getByText('Search');

    userEvent.click(button);

    expect(setSearchTerm).toHaveBeenCalled();
  });

});
