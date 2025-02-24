import React, {useState, useEffect} from "react";
import "../styles/login.css";
import { checkUser } from "../services/userauth";


const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    useEffect(() => {
            // fetchTasks()
            //     .then((data) => {
            //         console.log("Fetched Tasks:", data);  
            //         setTasks(data);
            //     })
            //     .catch((error) => console.error("Error fetching tasks:", error));
        }, []);

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
                const response = await checkUser(email, password);
            } catch (error) {
                alert(error.message);
            }

        
            // try {
            //     const response = await addTask(title);
            //     onTaskAdded(response.task);  
            //     setTitle("");  
            // } catch (error) {
            //     alert(error.message);
            // }
        };
        

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-light">
            <form className="login_bg text-dark p-4 rounded w-25" onSubmit={handleLogin}>
                <h3 className="text-center text-light">Login</h3>

                <div className="form-floating mb-3">
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
            </form>
        </div>
    );
};

export default Login;
