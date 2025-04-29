import { createContext, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";  // Correct import for react-router-dom
import Root from './Layouts/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Register from './Components/Register/Register.jsx';
import Login from './Components/Login/Login.jsx';
import AuthProvider from './contexts/AuthProvider.jsx';
import PrivateRoute from './Routes/PrivateRoute.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Orders from './Components/Orders/Orders.jsx'

// Create AuthContext
export const AuthContext = createContext(null);

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { 
        index: true,
        Component: Home
      },
      {
        path: "register",
        Component: Register
      },
      {
        path: "login",
        Component: Login
      },
      {
        path: 'orders',
        element: <PrivateRoute><Orders /></PrivateRoute>
      },
      {
        path: 'profile',
        element: <PrivateRoute><Profile /></PrivateRoute>
      },
      {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard /></PrivateRoute>
      },
      {
        path: '*', // Optional: handles unmatched routes
        element: <div className="text-center text-red-500 mt-10">404 - Page Not Found</div>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);
