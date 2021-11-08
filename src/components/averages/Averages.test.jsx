import { render, screen } from '@testing-library/react';
import Averages from './Averages';

describe('Averages test', () => {
  it('renders Averages component', () => {
    render(
      <Averages
        height={132.5}
        mass={77.2}
      />
    );

    const element1 = screen.getByText('Average Height: 132.5');
    const element2 = screen.getByText('Average Mass: 77.2');

    expect(element1).toBeInTheDocument();
    expect(element2).toBeInTheDocument();
  });
});
