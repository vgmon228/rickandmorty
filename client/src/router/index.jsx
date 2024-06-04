import { createBrowserRouter, redirect } from "react-router-dom";
import Home from '../views/Home'
import Detail from "../views/Detail";
import Location from "../views/Location";
import Add from "../views/Add";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/detail/:id",
    element: <Detail/>,
  },
  {
    path: "/location",
    element: <Location/>,
  },
  {
    path: "/add",
    element: <Add/>,
  },
])

export default router