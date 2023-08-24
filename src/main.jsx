import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";
import ErrorPage from "./ErrorPage";
import Login from "./Components/Pages/Login";
import Register from "./Components/Pages/Register";
import AuthContext from "./Components/AuthProvider/AuthContext/AuthContext";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContext>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AuthContext>
);
