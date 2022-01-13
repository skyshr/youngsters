import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Nopage from "./pages/Nopage";
import Join from "./pages/Join";
import Mypage from "./Mypage/Mypage";
// import Board from "./components/Board";
import Boardpage from "./components/Boardpage";

export default function Router({setTest}){
  return(
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Layout setTest={setTest}/>}>
          <Route index element={<Home/>} />
          <Route path = "board" element = {<Boardpage />} />
          <Route path = "mypage" element = {<Mypage />} />
          <Route path = "*" element = {<Nopage />} />
          <Route path = "join" element = {<Join />} />
          <Route path = "login" element = {<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}