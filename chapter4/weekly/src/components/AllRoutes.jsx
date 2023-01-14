import React from "react";
import Home from "./Home";
import Progess from "./Progess";
import {Routes, Route} from 'react-router-dom';
import Dashboard from "./Dashboard";


export default function AllRoutes() {
  return <div>
        <Routes>
            <Route path = "/" element = {<Dashboard/>}/>
            <Route path = "/home" element = {<Home/>}/>
            <Route path = "/progress" element = {<Progess/>}/>

        </Routes>

  </div>;
}
