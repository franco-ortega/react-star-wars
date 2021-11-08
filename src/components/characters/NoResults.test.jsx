import { render, screen } from '@testing-library/react';
import NoResults from './NoResults';

describe('NoResults test', () => {
  it('renders NoResults', () => {
    render(<NoResults />);

    const element = screen.getByText('No results found.');

    expect(element).toBeInTheDocument();
  });
});
