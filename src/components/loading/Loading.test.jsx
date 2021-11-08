import { render, screen } from '@testing-library/react';
import Loading from './Loading';

describe('Loading test', () => {
  it('renders Loading', () => {
    render(<Loading />);

    const element = screen.getByText('Loading...');

    expect(element).toBeInTheDocument();
  });
});
