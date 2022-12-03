import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import Main from "./pages/Main";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider
      router={createBrowserRouter([{ path: "/", element: <Main /> }])}
    />
  </React.StrictMode>
);
