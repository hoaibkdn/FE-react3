/** @format */

import { ListProducts, Nav } from './components';
import Login from './pages/Login';
import ListPost from './pages/ListPosts';
import PostDetail from './pages/PostDetail';
import './App.css';
import { useState } from 'react';
import { ListProductContext } from './hooks/context';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <Nav />,
    children: [
      {
        path: '/',
        element: <ListPost />,
      },
      {
        path: '/contact',
        element: (
          <div>
            <h2>Contact</h2>
          </div>
        ),
      },
      {
        path: '/about-us',
        element: (
          <div>
            <h2>About us</h2>
          </div>
        ),
      },
      {
        path: '/post/:postId',
        element: <PostDetail />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// state vs props

/**
 * Handle onClick
 * when clicking on any item => update it into the top of the list
 */
