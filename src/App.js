import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Categorypage from './page/Categorypage';
import Aboutpage from './page/Aboutpage';
import Subhomepage from './components/subhomepage';

export default function App() {
  return (
    <div className="App ">
      
      <Subhomepage/>


        {/* <BrowserRouter>  
          <Routes>
            <Route path="/" element={ <Homepage /> } />
            <Route path="/category" element={ <Categorypage /> } />
            <Route path="/about" element={ <Aboutpage /> } />
            <Route path="*" element={ <h1>Not Found</h1> } />
          </Routes>
        </BrowserRouter> */}
    </div>
  );
}
