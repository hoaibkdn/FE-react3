/** @format */

import { ListProducts } from './components';
import Login from './pages/Login';
import ListPost from './pages/ListPosts';
import './App.css';
import { useState } from 'react';
import { ListProductContext } from './hooks/context';

function App() {
  const [toggleList, setToggleList] = useState(true);
  const [dateVal, setDateVal] = useState(new Date().getTime());
  return (
    <>
      <button onClick={() => setToggleList(!toggleList)}>Toggle</button>
      <button onClick={() => setDateVal(new Date().getTime())}>
        Set Date {dateVal}
      </button>
      <Login />
      <ListPost />

      {/* {toggleList ? (
        <ListProductContext.Provider value={{ toggleList, dateVal }}>
          <ListProducts />
        </ListProductContext.Provider>
      ) : null} */}
    </>
  );
}

export default App;

// state vs props

/**
 * Handle onClick
 * when clicking on any item => update it into the top of the list
 */
