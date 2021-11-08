import { render, screen } from '@testing-library/react';
import PageList from './PageList';

describe('PageList test', () => {
  it('renders a PageList component', () => {
    render(
      <PageList
        totalPages={10}
        setCurrentPage={() => {}}
      />
    );

    const element = screen.getByText('10');

    expect(element).toBeInTheDocument();
  });
});
