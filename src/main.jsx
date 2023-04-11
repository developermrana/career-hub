import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Statistics from "./components/Statistics/Statistics";
import Blog from "./components/Blog/Blog";
import Applied from "./components/Applied/Applied";
import Main from "./components/Main/Main";
import Details from "./components/Details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "static",
        element: <Statistics />,
      },
      {
        path: "applied",
        element: <Applied />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "details",
        element: <Details />,
        loader: () => fetch("jobFeature.json"),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
