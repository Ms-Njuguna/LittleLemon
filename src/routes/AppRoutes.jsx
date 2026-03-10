import Home from "../pages/Home";
import AppLayout from "../layouts/AppLayout";

export const AppRoutes = [
    { path: "/",
      element: <AppLayout />,
      children: [
        { index: true, element: <Home /> },
      ]
    },
]