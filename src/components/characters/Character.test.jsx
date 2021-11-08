import { render, screen } from '@testing-library/react';


describe('Character componenet test', () => {
  it('renders a character', () => {
    render(
      <Character
        key={1}
        name={'Luke Skywalker'}
        gender={'male'}
        hairColor={'blonde'}
        mass={'77'}
        height={'172'}
      />
    );
    
    const character = screen.getByText('Luke Skywalker');

    expect(character).toBeInTheDocument();

  });

});
