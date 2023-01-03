import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Header} from './components/Header.js';
import {Watchlist} from './components/Watchlist';
import {Watched} from './components/Watched';
import {Add} from './components/Add';
import './lib/font-awesome/css/all.min.css';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/movie-react/" element={<Watchlist />} />
        <Route path="/movie-react/watched" element={<Watched />} />
        <Route path="/movie-react/add" element={<Add />} />
      </Routes>
    </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
