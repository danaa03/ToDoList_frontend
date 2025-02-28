import React, { useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";
import '../styles/homepage.css';

const Homepage = () => {
    const [isLogin, setIsLogin] = useState(true); 

    return (
        <div className="bg-warning pl-3">
            <div className="p-2">
                <h1>To-Do-List</h1>
            </div>
            <div className="p-5 bg-dark text-light">
                {isLogin ? <Login toggleForm={() => setIsLogin(false)} /> : <Signup toggleForm={() => setIsLogin(true)} />}
            </div>
        </div>
    );
};

export default Homepage;
