import React from "react";

//React Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./login";
import Page from "./page"

const router = createBrowserRouter([
  {
    path:"/",
    element: <Page/>
  },
  {
    path: "/",
    element: <LoginPage/>
  }
])
