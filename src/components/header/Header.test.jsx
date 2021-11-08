import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header test', () => {
  it('renders Header', () => {
    render(<Header />);

    const element = screen.getByText('STAR WARS Characters');

    expect(element).toBeInTheDocument();
  });
});
