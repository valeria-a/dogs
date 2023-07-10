import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { MainPage } from './MainPage';
import { ProfilePage } from './ProfilePage';
import { DogsProvider } from './context/dogsContext';
import { LoginPage } from './LoginPage';
import { ErrorPage } from './ErrorPage';

const router = createBrowserRouter([


  //   /
  //   /profile
  {
    //  http://localhost:3000/profile
    //  /profile
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: 

            <MainPage />

      },
      {
        path: '/profile',
        element: <>
          <ProfilePage />
          </>
      }
    ]
  },
    // /login
    {
      path: '/login',
      element: <LoginPage />,
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
  // <React.StrictMode>
    // <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
