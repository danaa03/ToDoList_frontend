import React, {useState, useEffect} from "react";
import "../styles/login.css";
import { login } from "../services/userauth";
import { useNavigate } from "react-router-dom";

const Login = ({toggleForm}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = async (e) => {
            e.preventDefault();
        
            if (!email.trim()) {
                alert("No email entered!");
                return;
            } else if (!password.trim())
            {
                alert("No password entered!");
                return;
            }

            try {
                const response = await login(email, password);
                alert("Logged in successfully");
                setEmail("");
                setPassword("");
                navigate("/tasks");
            } catch (error) {
                console.error("Login error:", error);
                alert(error.message);
            }
        };
        

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-light">
            <form className="login_bg text-dark p-4 rounded w-25" onSubmit={handleLogin}>
                <h3 className="text-center text-light mb-2">Login</h3>

                <div className="form-floating mb-3 mt-2">
                    <input type="email" className="form-control" id="floatingInput" placeholder="Email" value={email}
                        onChange={handleEmailChange} />
                    <label htmlFor="floatingInput">Email address</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password}
                        onChange={handlePasswordChange} />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <button className="btn btn-warning w-100" type = "submit">Login</button>

                <p className="mt-2 text-center text-light">
                    Don't have an account?  
                    <a href="#" className="text-warning ms-2" onClick={(e) => { e.preventDefault(); toggleForm(); }}>
                        Sign up here
                    </a>
                </p>
            </form>
        </div>
    );
};

export default Login;
