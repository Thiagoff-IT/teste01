import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import Root from "./routes/root";

import ErrorPage from "./pages/error";
import Contact from "./routes/contact";

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);