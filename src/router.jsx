import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
