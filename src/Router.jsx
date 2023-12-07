import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/fake-shop/",
      children: [
        {
          index: true,
          element: <App />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
