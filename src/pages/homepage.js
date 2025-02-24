import React, { useState } from "react";
import Login from "../components/Login";
import '../styles/homepage.css'
import Signup from "../components/Signup";

const Homepage = () => {
    const [isLogin, setIsLogin] = useState(true); 

    return (
        <div className="bg-warning pl-3">
            <div className="p-2">
                <h1>To-Do-List</h1>
            </div>
            <div className="p-5 mb-5 bg-dark text-light">
                {isLogin ? <Login /> : <Signup />} 
                <button 
                    className="btn btn-warning mt-3 button-placement"
                    onClick={() => setIsLogin(!isLogin)}
                >
                    {isLogin ? "Switch to Signup" : "Switch to Login"}
                </button>
            </div>
        </div>
    );
};

export default Homepage;
