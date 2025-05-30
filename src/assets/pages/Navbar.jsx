import React, { useContext } from 'react';
import WatchList from './WatchList';
import { Link } from 'react-router-dom';
import { WatchListContext } from '../context/WatchListContext.jsx';
const NavBar = () => {
  const {WatchList} = useContext(WatchListContext);

  return (
    <nav className='bg-gray-900 p-4 text-white  flex justify-between fixed w-full top-0 z-10'>
      <Link to="/" className='text-xl font-bold'>Movie App</Link>
      <Link to="/WatchList" className='text-xl'>WatchList({WatchList.length})</Link>
    </nav>
  );
};

export default NavBar;