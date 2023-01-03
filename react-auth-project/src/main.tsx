import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import Main from "./pages/Main";
// import Join from "./pages/Join";
import Login from "./pages/Login";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  // {
  //   path: "join",
  //   element: <Join />,
  // },
  {
    path: "login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
