import React, { useState } from 'react';
import { getCharacters } from '../../services/getCharacters';
import Header from '../header/Header';
import Loading from '../loading/Loading';

const App = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div data-testid="app">
      <Header />
      {loading && <Loading />}
    </div>
  );
};

export default App;
