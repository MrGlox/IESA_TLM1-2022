import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

import Form from "containers/Form";
import Clock from "containers/Clock";
import Fetch from "containers/Fetch";

import "./index.css";
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: "Home",
      },
      {
        path: "/clock",
        element: <Clock />,
      },
      {
        path: "/custom",
        element: (
          <>
            <Clock />
            <Form />
          </>
        ),
      },
      {
        path: "/apparts",
        element: <Form />,
      },
      {
        path: "/fetch",
        element: <Fetch />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
