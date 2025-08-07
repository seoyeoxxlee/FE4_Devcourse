import { createBrowserRouter, RouterProvider } from "react-router";
import Default from "./layouts/Default";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    Component: Default,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "login",
        Component: LoginPage,
      },
      {
        path: "register",
        Component: RegisterPage,
      },
      {
        path: "profile",
        Component: ProfilePage,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
