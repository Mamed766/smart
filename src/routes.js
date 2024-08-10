import { createBrowserRouter } from "react-router-dom";
import Layout from "./featured/Layout/Layout";
import Main from "./template/Main";
import Gadgets from "./template/Gadgets";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/gadgets",
        element: <Gadgets />,
      },
    ],
  },
]);
