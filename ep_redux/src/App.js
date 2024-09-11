// AppLayout.js
import React, { lazy, Suspense, useEffect, useState } from "react";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import Contact from "./components/Contact";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

// Chunking and lazy loading
const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));
const Body = lazy(() => import("./components/Body"));

const AppLayout = () => {
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    const data = { name: "sexxy" };
    setUserInfo(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userInfo, setUserInfo }}>
        <div className="app">
          <Header />
          <Suspense fallback={<Shimmer />}>
            <Outlet />
          </Suspense>
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Body />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
      },
      { path: "/contact", element: <Contact /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
      { path: "/cart", element: <Cart /> },
    ],
    errorElement: <Error />,
  },
]);

export default appRouter;
