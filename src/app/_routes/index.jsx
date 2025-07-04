import Login from "@app/pages/auth/login";
import Register from "@app/pages/auth/register";
import { createBrowserRouter } from "react-router-dom";
import SamplePage from "@app/pages";
import { StretchedLayout } from "@app/_layouts/StretchedLayout";
import { SoloLayout } from "@app/_layouts/SoloLayout"; 
import withAuth from "@app/_hoc/withAuth";
import { Page, NotFound404 } from "@app/_components/_core";
import ProductsPage from "@app/pages/dashboard/products";

const routes = [
  {
    path: "/",
    element: <StretchedLayout />,
    children: [
      {
        path: "/",
        element: <Page Component={SamplePage} hoc={withAuth} />,
      },
      {
        path: "/dashboard/products",
        element: <Page Component={ProductsPage} hoc={withAuth} />,
      },
    ],
  },
  {
    path: "/auth",
    element: <SoloLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound404 />,
  },
];

export const router = createBrowserRouter(routes);