import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";
import Default from "./layouts/Default";
import { fetchJsonPosts, fetchJsonPostsDetail } from "./loader/posts.loader";

const router = createBrowserRouter([
  {
    element: <Default />,
    hydrateFallbackElement: <h1>Loading...</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/custom-about",
        children: [
          {
            path: "about",
            loader: fetchJsonPosts,
            errorElement: <h1>Error!...</h1>,
            element: <About />,
          },
        ],
      },
      {
        path: "/detail/:id",
        loader: fetchJsonPostsDetail,
        errorElement: <h1>Error!...</h1>,
        element: <Detail />,
      },
    ]
  },
  {
    path: "*",
    element: <NotFound />,
  },
])

export default function Router () {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}