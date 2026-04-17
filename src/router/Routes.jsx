import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import HomePage from "../pages/HomePage/HomePage";
import FriendDetailsPage from "../pages/FriendDetailsPage/FriendDetailsPage";
import TimelinePage from "../pages/TimelinePage/TimelinePage";
import StatsPage from "../pages/StatsPage/StatsPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/friend/:id",
        element: <FriendDetailsPage />,
      },
      {
        path: "/history",
        element: <TimelinePage />,
      },
      {
        path: "/analytics",
        element: <StatsPage />,
      },
    ],
  },
]);
