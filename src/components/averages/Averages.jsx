import React from 'react';
import PropTypes from 'prop-types';

const Averages = ({ height, mass }) => {
  return (
    <div>
      <p>Average Height: {height}</p>
      <p>Average Mass: {mass}</p>
    </div>
  );
};

Averages.propTypes = {
  height: PropTypes.number.isRequired,
  mass: PropTypes.number.isRequired
};

export default Averages;
