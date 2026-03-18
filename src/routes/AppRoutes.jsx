import Home from "../pages/Home";
import Reservation from "../pages/Reservation";
import AppLayout from "../layouts/AppLayout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

export const AppRoutes = [
    { path: "/",
      element: <AppLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/reservation", element: <Reservation /> },
      ]
    },
    { path: "/login", element: <Login />},
    { path: "/signup", element: <Signup />},
]