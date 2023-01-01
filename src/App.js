import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Header} from './components/Header.js';
import {Watchlist} from './components/Watchlist';
import {Watched} from './components/Watched';
import {Add} from './components/Add';
import './lib/font-awesome/css/all.min.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Watchlist />} />
        <Route path="/watched" element={<Watched />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
