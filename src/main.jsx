import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import About from "./components/About";
import Contact from "./components/Contact.jsx";
import Body from "./components/Body.jsx";
import Error from "./components/Error.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
// import Grocerry from "./components/Grocerry.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shimmer from "./components/Shimmer.jsx";

const Grocerry = lazy(()=>import("./components/Grocerry.jsx"))
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurant/:resId", element: <RestaurantMenu/> },
      { path: "/grocerry", element:<Suspense fallback={<Shimmer/>}><Grocerry/></Suspense>  },
    ],
    errorElement: <Error />,
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter}></RouterProvider>
);
