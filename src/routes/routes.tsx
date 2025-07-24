import ProtectedRouteLayout from "@/layout/ProtectedRouteLayout";
import RootLayout from "@/layout/RootLayout";
import Home from "@/pages/Home";
import LoginPage from "@/pages/LoginPage";
import OnboardingPage from "@/pages/OnboardingPage";
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
        path: pagePath.ONBOARDING,
        element: <OnboardingPage />
      },
      { path: pagePath.LOGIN, element: <LoginPage /> },
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
  },
  {
    path: "/",
    element: <ProtectedRouteLayout />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  }
]);

export default router;
