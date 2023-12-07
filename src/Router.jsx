import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/fake-shop/",
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
