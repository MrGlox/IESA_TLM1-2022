import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import App from "./App";

import Appart from "containers/Appart";
import Form from "containers/Form";
import Clock from "containers/Clock";
import Fetch from "containers/Fetch";

import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { MainProvider } from "contexts/Main";

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
        path: "/apparts/:slug",
        element: <Appart />,
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

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MainProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </MainProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
