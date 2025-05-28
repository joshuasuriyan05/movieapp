import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import './App.css';
import NavBar from './assets/pages/NavBar.jsx';
import Home from './assets/pages/Home.jsx';
import WatchList from './assets/pages/WatchList.jsx';
import Generes from './assets/components/Generes.jsx';
import {WatchListProvider} from './assets/context/WatchListContext.jsx';

function App() {
  return (
    <WatchListProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/navbar' element={<Home/>} />
          <Route path='/watchlist' element={<WatchList/>} />
        </Routes>
      </BrowserRouter>
    </WatchListProvider>
  );
};

export default App;
