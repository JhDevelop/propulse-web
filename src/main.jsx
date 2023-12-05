import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import PricePage from "./pages/PricePage.jsx";
import CurriculumPage from "./pages/CurriculumPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/prices",
    element: <PricePage />,
  },
  {
    path: "/curriculum",
    element: < CurriculumPage />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header/>
    <RouterProvider router={router} />
    <Footer/>
  </React.StrictMode>
);