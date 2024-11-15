/** @format */

import { ListProducts } from './components';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
    <>
      <Login />
      <ListProducts />
    </>
  );
}

export default App;

// state vs props

/**
 * Handle onClick
 * when clicking on any item => update it into the top of the list
 */
