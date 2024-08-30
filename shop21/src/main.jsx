import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./assets/styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeScreen } from "./screens/HomeScreen.jsx";
import { ProductScreen } from "./screens/ProductScreen.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <HomeScreen />,
      },
      {
        path: "/product/:productId",
        element: <ProductScreen />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
