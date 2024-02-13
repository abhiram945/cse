import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Cn from './cn.jsx';
import Dp from './dp.jsx';
import Cd from './cd.jsx';
import './index.css';
const Home=()=>{
    return<>
        <div className="warning">
            <p>This is a temporary site for reference</p>
        </div>
        <nav>
            <Link to="/cse/cn">Computer Networks</Link><br/>
            <Link to="/cse/cd">Compiler Design</Link><br/>
            <Link to="/cse/dp">One Note</Link><br/>
        </nav>
        <div className="designer">
            <p>Created by Abhiram with React Js</p>
        </div>
    </>
}
ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <BrowserRouter>
        <Routes>
            <Route exact path="/cse" element={<Home/>}></Route>
            <Route path="/cse/cn" element={<Cn/>}></Route>
            <Route path="/cse/cd" element={<Cd/>}></Route>
            <Route path="/cse/dp" element={<Dp/>}></Route>
        </Routes>
    </BrowserRouter>
    </>
)