import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Stack from './components/Stack';
import Newcomponent from './components/Newcomponent';

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Newcomponent/>
      <Stack />
    </div>
  );
}

export default App;
