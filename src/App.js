import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/homepage'
import Tasks from './pages/tasks'
import "bootstrap/dist/css/bootstrap.min.css";      
import { Navigate } from "react-router";

function PrivateRoutes({children})
{
    const token = localStorage.getItem("token");
    return token ? children : <Navigate to = "/"/>
}

const App = () => {
    
    return (
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/tasks" element={<PrivateRoutes><Tasks /></PrivateRoutes>} />
            </Routes>
        </BrowserRouter>
    );
      
};

export default App;


