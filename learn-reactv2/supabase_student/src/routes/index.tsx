import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./layouts/RootLayout";
import Home from "./views/Home";
import Login from "./views/Login";
import CreatePost from "./views/CreatePost";
import BlogPost from "./views/BlogPost";
import NotFound from "./views/NotFound";
import { fetchUserData } from "./loader/auth.loader";
import FullLoading from "../components/common/FullLoading";

const router = createBrowserRouter([
  {
    Component: RootLayout,
    loader: fetchUserData,
    HydrateFallback: FullLoading,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/create-post",
        Component: CreatePost,
      },
      {
        path: "/post/:id",
        Component: BlogPost,
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);

export default function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
