import Main from "../Layout/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import List from "../pages/HomePages/List";
import Edit from "../pages/HomePages/Edit";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "list",
        element: <List></List>,
      },
      {
        path: "edit",
        element: <Edit></Edit>,
      },
    
    ],
  },
]);
