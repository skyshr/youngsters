import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Nopage from "./pages/Nopage";
import Join from "./pages/Join";
import Mypage from "./Mypage/Mypage";

export default function Router(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Layout />}>
          <Route index element={<Home/>} />
          <Route path = "mypage" element = {<Mypage />} />
          <Route path = "*" element = {<Nopage />} />
          <Route path = "join" element = {<Join />} />
          <Route path = "login" element = {<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}