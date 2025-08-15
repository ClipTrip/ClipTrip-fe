import ProtectedRouteLayout from '@/layout/ProtectedRouteLayout';
import RootLayout from '@/layout/RootLayout';
import BookmarkDetailPage from '@/pages/BookmarkDetailPage';
import Home from '@/pages/Home';
import LoginPage from '@/pages/LoginPage';
import OnboardingPage from '@/pages/OnboardingPage';
import PlaceCardPage from '@/pages/PlaceCardPage';
import Places from '@/pages/Places';
import Profile from '@/pages/Profile';
import RegisterPage from '@/pages/RegisterPage';
import TripDetailPage from '@/pages/TripDetailPage';
import TripsPage from '@/pages/TripsPage';
import { pagePath } from '@/routes/pagePath';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: pagePath.ONBOARDING,
        element: <OnboardingPage />,
      },
      { path: pagePath.LOGIN, element: <LoginPage /> },
      { path: pagePath.REGISTER, element: <RegisterPage /> },
    ],
  },
  {
    path: '/',
    element: <ProtectedRouteLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: pagePath.PLACES, element: <Places /> },
      {
        path: `${pagePath.PLACES}/bookmark/:bookmarkId`,
        element: <BookmarkDetailPage />,
      },
      {
        path: `${pagePath.PLACES}/:placeId`,
        element: <PlaceCardPage />,
      },
      {
        path: pagePath.PROFILE,
        element: <Profile />,
      },
      {
        path: pagePath.TRIPS,
        element: <TripsPage />,
      },
      { path: `${pagePath.TRIPS}/:scheduleId`, element: <TripDetailPage /> },
    ],
  },
]);

export default router;
