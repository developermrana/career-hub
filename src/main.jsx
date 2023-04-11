import React, { useState } from "react";
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
import { showDetails } from "./loder";

// const [] = useState([]);
// fetch("jobFeature.json")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

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
        // loader: showDetails,
        element: <Details />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
