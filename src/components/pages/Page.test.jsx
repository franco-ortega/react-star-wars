import { render, screen } from '@testing-library/react';

describe('Page test', () => {
  it('renders a Page component', () => {
    render(
      <Page pageNumber={1} />
    );

    const element = screen.getByText('1');

    expect(element).toBeInTheDocument();
  });
});
