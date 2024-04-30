import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PostWritePage from "./component/page/PostWritePage.tsx";
import PostViewPage from "./component/page/PostViewPage.tsx";
import MainPage from "./component/page/MainPage";
import PostUpdatePage from "./component/page/PostUpdatePage.tsx";
import Layout from "./component/page/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="post/:postId" element={<PostViewPage />} />
          <Route path="post-write" element={<PostWritePage />} />
          <Route path="post-write/:postId" element={<PostUpdatePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
