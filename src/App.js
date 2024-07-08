import React, { useState } from 'react';
import Home from './Components/Home';
import Results from './Components/Results';
import { Route, useLocation, Routes } from 'react-router-dom';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const location = useLocation()

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Routes location={location} key={location.pathname}>  
          <Route path='/home' element={<Home navigateTo={Home} />} />
          <Route path='/Results' element={<Results navigateTo={Results} />} />
          <Route path='/' element={<Home navigateTo={Home} />} />

     

        </Routes>
    </div>
  );
}
