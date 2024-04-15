import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PostWritePage from "./component/page/PostWritePage";
import PostViewPage from "./component/page/PostViewPage";
import MainPage from "./component/page/MainPage";
import PostUpdatePage from "./component/page/PostUpdatePage";
import LoginPage from "./component/page/LoginPage";

import Layout from "./component/page/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LoginPage />} />
          <Route path="/post" element={<MainPage />} />
          <Route path="post/:postId" element={<PostViewPage />} />
          <Route path="post-write" element={<PostWritePage />} />
          <Route path="post-write/:postId" element={<PostUpdatePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
