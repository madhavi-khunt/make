// import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Work from "../pages/Work";
import Sustainability from "../pages/Sustainability";
import Media from "../pages/Media";
import Perspective from "../pages/Perspective";
import Studios from "../pages/Studios";
import Meetmake from "../pages/Meetmake";
import Whoweare from "../pages/Whoweare";
import Meetmakers from "../pages/Meetmakers";
import Employee from "../pages/Employee";
import Equity from "../pages/Equity";
import WhatweStand from "../pages/WhatweStand";
import Careers from "../pages/Careers";
import Layout from "../Components/Layout";
import ScrollToTop from "../Components/ScrollToTop";

export default function MainRouter() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/meetmake" element={<Meetmake />}></Route>
          <Route path="/meetmake/whoweare" element={<Whoweare />}></Route>
          <Route path="/meetmake/Meetmakers" element={<Meetmakers />}></Route>
          <Route path="/meetmake/Employee" element={<Employee />}></Route>
          <Route path="/meetmake/Equity" element={<Equity />}></Route>
          <Route path="/meetmake/WhatweStand" element={<WhatweStand />}></Route>
          <Route path="/meetmake/Careers" element={<Careers />}></Route>
          <Route path="/work" element={<Work />}></Route>
          <Route path="/sustainability" element={<Sustainability />}></Route>
          <Route path="/media" element={<Media />}></Route>
          <Route path="/perspective" element={<Perspective />}></Route>
          <Route path="/studios" element={<Studios />}></Route>
        </Route>
      </Routes>
    </>
  );
}
