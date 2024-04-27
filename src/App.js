import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PostWritePage from "./component/page/PostWritePage";
import PostViewPage from "./component/page/PostViewPage";
import MainPage from "./component/page/MainPage";
import PostUpdatePage from "./component/page/PostUpdatePage";
import Layout from "./component/page/Layout";
import LoginPage from "./component/page/LoginPage";
import { AuthProvider } from "./utils/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="post/:postId" element={<PostViewPage />} />
            <Route path="post-write" element={<PostWritePage />} />
            <Route path="post-write/:postId" element={<PostUpdatePage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
