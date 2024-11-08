import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import AllProduct from "../components/AllProduct";
import ErrorPage from "../pages/ErrorPage";
import DetailsPage from "../pages/DetailsPage";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";
import Sidebar from "../components/Sidebar";
import AboutUs from "../pages/AboutUs";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        loader: () => fetch('../allProduct.json'),
        element: <Home></Home>,
        children: [
          {
            path: '/',
            element: <Sidebar></Sidebar>,
            loader: () => fetch('../allProduct.json'),
            children: [
              {
                path: '/',
                element: <AllProduct></AllProduct>,
                loader: () => fetch('../allProduct.json'),
              },
              {
                path: '/category/:category',
                element: <AllProduct></AllProduct>,
                loader: () => fetch('../allProduct.json'),
              }
            ]
          },
        ],
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
        loader: () => fetch('../allProduct.json'),
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: '/dashboard',
            element: <Cart></Cart>,
            loader: () => fetch('../allProduct.json'),
          },
          {
            path: '/dashboard/cart',
            element: <Cart></Cart>,
            loader: () => fetch('../allProduct.json'),
          },
          {
            path: '/dashboard/wishlist',
            element: <Wishlist></Wishlist>,
            loader: () => fetch('../allProduct.json'),
          }
        ]
      },
      {
        path: '/about',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/details/:id',
        element: <DetailsPage></DetailsPage>,
        loader: () => fetch('../allProduct.json'),
      },
    ]
  },
])

export default routes