import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./ErrorPage.jsx";
import LoginPage from "./LoginPage.jsx";
import HomePage from "./HomePage.jsx";
import RegistrationPage from "./RegistrationPage.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children:[
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/login',
                element: <LoginPage />,
            },
            {
                path: '/register',
                element: <RegistrationPage />,
            }
        ],
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
