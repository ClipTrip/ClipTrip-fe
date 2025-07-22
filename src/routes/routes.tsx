import RootLayout from "@/layout/RootLayout";
import Home from "@/pages/Home";
import Places from "@/pages/Places";
import Profile from "@/pages/Profile";
import Trips from "@/pages/Trips";
import { pagePath } from "@/routes/pagePath";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: pagePath.PLACES,
        element: <Places />
      },
      {
        path: pagePath.PROFILE,
        element: <Profile />
      },
      {
        path: pagePath.TRIPS,
        element: <Trips />
      }
    ]
  }
]);

export default router;
