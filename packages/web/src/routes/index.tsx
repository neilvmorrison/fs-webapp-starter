import { createBrowserRouter } from "react-router";
import Home from "./home";
import { Layout } from "../components";
import Profile from "./profile";

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
    ],
  },
]);

export default router;
