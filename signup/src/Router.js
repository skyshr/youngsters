import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Nopage from "./pages/Nopage";

export default function Router(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Layout />}>
          <Route index element={<Home/>} />
          <Route path = "*" element = {<Nopage />} />
          <Route path = "Login" element = {<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}