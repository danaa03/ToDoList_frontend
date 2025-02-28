import React, {useState, useEffect} from "react";
import "../styles/login.css";
import {addUser} from "../services/userauth";

const Signup = ({toggleForm}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleSignup = async (event) => {
        event.preventDefault()
        if (password !== confirmPassword) {
            alert("Passwords do not match")
            return
        }

        try {
            await addUser(email, password);
            alert("User added successfully");
            setEmail("");
            setConfirmPassword("");
            setPassword("");
        } catch (error) {
            alert(error.message); 
        }
        return;
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value)
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-light">
            <form onSubmit = {handleSignup} className="login_bg text-dark p-4 rounded w-25">
                <h3 className="text-center text-light">Sign Up</h3>

                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value = {email} onChange={handleEmailChange}/>
                    <label htmlFor="floatingInput">Email address</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value = {password} onChange={handlePasswordChange}/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingCPassword" placeholder="Confirm Password" value = {confirmPassword} onChange={handleConfirmPasswordChange} />
                    <label htmlFor="floatingPassword">Confirm Password</label>
                </div>

                <button className="btn btn-warning w-100" type = "submit">Signup</button>
                <p className="mt-2 text-center text-light">
                    Already have an account?  
                    <a href="#" className="text-warning ms-2" onClick={(e) => { e.preventDefault(); toggleForm(); }}>
                        Login here
                    </a>
                </p>
            </form>
        </div>
    );
};

export default Signup;
