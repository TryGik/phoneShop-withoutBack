import './style/index.css';
import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { Home, Cart, More } from './pages/';
import { Header, Error } from './components';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/about' element={<More />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
