import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Cn from './cn.jsx';
import Dp from './dp.jsx';
import Cd from './cd.jsx';
import './index.css';
const Home=({shrinkNav})=>{
    return<>
        <nav className={shrinkNav?'shrinkNav':''}>
            <Link to="/cse">Home</Link>
            <Link to="/cse/cn">Computer Networks</Link>
            <Link to="/cse/cd">Compiler Design</Link>
            <Link to="/cse/dp">One Note</Link>
        </nav>
    </>
}
ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <BrowserRouter>
        <Routes>
            <Route exact path="/cse" element={<Home shrinkNav={false}/>}></Route>
            <Route path="/cse/cn" element={<><Home shrinkNav={true}/><Cn/></>}></Route>
            <Route path="/cse/cd" element={<><Home shrinkNav={true}/><Cd/></>}></Route>
            <Route path="/cse/dp" element={<><Home shrinkNav={true}/><Dp/></>}></Route>
        </Routes>
    </BrowserRouter>
    </>
)