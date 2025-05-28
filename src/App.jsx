import React from 'react';
import {FaHeart, FaRegHeart} from 'react-icons/fa';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import './App.css';
import Navbar from './assets/pages/Navbar.jsx';
import Home from './assets/pages/Home.jsx';
import Moviecard from './assets/components/Moviecard.jsx';
import WatchList from './assets/pages/WatchList.jsx';
import Generes from './assets/components/Generes.jsx';
import {WatchListProvider} from './assets/context/WatchListContext.jsx';

function App() {
  return (
    <WatchListProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/navbar' element={<Home/>} />
          <Route path='/WatchList' element={<WatchList/>} />
        </Routes>
      </BrowserRouter>
    </WatchListProvider>
  );
};

export default App;
