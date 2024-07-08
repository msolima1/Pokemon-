import React, { useState } from 'react';
import Home from './Components/Home';
import Results from './Components/Results';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <header>
        <button onClick={() => navigateTo('home')}>Home</button>
        <button onClick={() => navigateTo('results')}>Results</button>
      </header>
      <main>
        {currentPage === 'home' && <Home />}
        {currentPage === 'results' && <Results />}
      </main>
    </div>
  );
}
