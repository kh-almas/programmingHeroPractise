import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./ErrorPage.jsx";
import LoginPage from "./LoginPage.jsx";
import HomePage from "./HomePage.jsx";
import RegistrationPage from "./RegistrationPage.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import PasswordLessAuthPage from "./PasswordLessAuthPage.jsx";
import PrivateRoutes from "./routes/PrivateRoutes.jsx";
import ManageUsers from "./manage/user/ManageUsers.jsx";
import ProfileInfoView from "./profile/ProfileInfoView.jsx";
import ProfileInfoProvider from "./provider/ProfileInfoProvider.jsx";
import ProfileForm from "./profile/ProfileForm.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children:[
            {
                path: '/',
                element: <PrivateRoutes><HomePage /></PrivateRoutes>,
            },
            {
                path: '/login',
                element: <LoginPage />,
            },
            {
                path: '/register',
                element: <RegistrationPage />,
            },
            {
                path: '/guest',
                element: <PasswordLessAuthPage />,
            },
            {
                path: '/manage/user',
                element: <ManageUsers />,
            },
            {
                path: '/view/profile',
                element:
                    <ProfileInfoProvider>
                        <PrivateRoutes>
                            <ProfileInfoView />
                        </PrivateRoutes>
                    </ProfileInfoProvider>,
            },
            {
                path: '/update/profile',
                element:
                    <ProfileInfoProvider>
                        <PrivateRoutes>
                            <ProfileForm />
                        </PrivateRoutes>
                    </ProfileInfoProvider>,
            }
        ],
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
          <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
