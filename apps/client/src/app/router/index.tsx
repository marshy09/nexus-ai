import { createBrowserRouter } from "react-router-dom";

import AppLayout from "../layouts/AppLayouts";
import DashboardPage from "../../pages/DashboardPage";
import NotFoundPage from "../../pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    ErrorBoundary: NotFoundPage,

    children: [
      {
        index: true,
        Component: DashboardPage,
      },
    ],
  },
]);