import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/homepage'
import Tasks from './pages/tasks'
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => {
    // return (
    //     <div className = 'bg-dark w-full'>
    //         <Homepage />
    //     </div>
    return (
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route index element={<Home />} />
                    <Route path="/tasks" element={<Tasks/>}/>
            </Routes>
        </BrowserRouter>
    );
      
};

export default App;


