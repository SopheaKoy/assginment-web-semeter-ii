import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./Components/Layout";

import Homepage from "./page/Homepage";
import Categorypage from "./page/category/Categorypage";
import Aboutpage from "./page/about/Aboutpage";

export default function App() {
  return (
    <div className='App'>
      <Layout />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/category' element={<Categorypage />} />
          <Route path='/about' element={<Aboutpage />} />
          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
