import { createBrowserRouter } from "react-router-dom";

import { Layout } from "../component/layout";
import { MainPage, PostUpdatePage, PostViewPage, PostWritePage } from "../page";
import { NotFound } from "../component/fallback";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "post",
        children: [
          { path: "write", element: <PostWritePage /> },
          {
            path: ":id",
            element: <PostViewPage />,
          },
          { path: ":id/update", element: <PostUpdatePage /> },
        ],
      },
    ],
    errorElement: <NotFound />,
  },
]);
