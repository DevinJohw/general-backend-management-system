import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../pages";
import User from "../pages/user";
import PageOne from "../pages/other/page-one";
import Home from "../pages/home";
import PageTwo from "../pages/other/page-two";
import PageThree from "../pages/other/page-three";
import Mall from "../pages/mall";


const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Navigate to="home" replace />
      },
      {
        path: 'home',
        Component: Home
      },
      {
        path: 'user',
        Component: User
      },
      {
        path: 'mall',
        Component: Mall
      },
      {
        path: 'other',
        children: [
          {
            index: true,
            element: <Navigate to="page-one" replace />
          },
          {
            path: 'page-one',
            Component: PageOne
          },
          {
            path: 'page-two',
            ComponentL: PageTwo
          },
          {
            path: 'page-three',
            Component: PageThree
          }
        ]
      }
    ]
  }
], {
  future: {
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_relativeSplatPath: true,
    v7_skipActionErrorRevalidation: true,
  },
})

export default router;