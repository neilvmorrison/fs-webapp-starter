import { createBrowserRouter } from "react-router";
import Home from "./home";
import { Layout } from "../components";
import Profile from "./profile";
import Auth from "./auth";
import Schedule from "./schedule";
import Projects from "./projects";
import Finances from "./finances";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "schedule",
        element: <Schedule />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "finances",
        element: <Finances />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
  },
]);

export default router;
