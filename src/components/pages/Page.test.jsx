import { render, screen } from '@testing-library/react';
import Page from './Page';

describe('Page test', () => {
  it('renders a Page component', () => {
    render(
      <Page
        pageNumber={1}
        currentPage={1}
        setCurrentPage={() => {}}
      />
    );

    const element = screen.getByText('1');

    expect(element).toBeInTheDocument();
  });
});
