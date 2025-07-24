import { createBrowserRouter } from "react-router";
import Home from "./home";
import { Layout } from "../components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default router;
