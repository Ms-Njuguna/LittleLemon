import Home from "../pages/Home";
import Reservation from "../pages/Reservation";
import AppLayout from "../layouts/AppLayout";

export const AppRoutes = [
    { path: "/",
      element: <AppLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/reservation", element: <Reservation /> },
      ]
    },
]