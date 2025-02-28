import React, {useState} from "react";
import TaskList from "../components/TaskList";
import { useNavigate } from "react-router-dom";
import { logout } from "../services/userauth";

const Tasks = () => {
    const navigate = useNavigate();

    return ( 
        <div className='bg-warning pl-5'>
            <h1>To-Do List</h1>
            <button className='btn btn-warning' onClick={() => { logout(); navigate("/"); }}>Logout</button>
            <TaskList />
        </div>
    );
};

export default Tasks;
