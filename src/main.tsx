import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Layout';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import User from './components/User';
import Home from './pages/Home';
import UserDetail from './components/UserDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'users',
        element: <User />,
      },
      {
        path: 'users/:userId',
        element: <UserDetail/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
