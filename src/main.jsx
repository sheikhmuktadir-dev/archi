import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// css
import "./Styles/index.css";
import "./Styles/root.css";
import "./Styles/style.css";

// router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import Layout from "./Layout.jsx";
import ErrorPage from "./Pages/ErrorPage/ErrorPage.jsx";
import Home from "./Pages/Home/Home.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
