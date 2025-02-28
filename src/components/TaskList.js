import React, { useEffect, useState } from "react";
import AddTask from "./AddTask"; 
import { deleteTask, getProtectedTasks } from "../services/tasks";

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getProtectedTasks()
            .then((data) => {
                console.log("Fetched Tasks:", data);  
                setTasks(data);
            })
            .catch((error) => console.error("Error fetching tasks:", error));
    }, []);

    const handleTaskAdded = async () => {
        const updatedTasks = await getProtectedTasks();
        setTasks(updatedTasks);
    };

    const handleTaskDeleted = async (title) => {
        const updatedTasks = await deleteTask(title);
        setTasks(updatedTasks);
        window.location.reload()
    };

    return (
        <div className="bg-dark text-light">
                <AddTask onTaskAdded={handleTaskAdded} />
            <ul>
                { !Array.isArray(tasks) || tasks.length === 0 ? ( 
                    <li>No tasks found</li>
                ) :
              
                (tasks.map((task) => (
                    <div key={task.id} className="d-flex flex-row mt-2">
                        <li className="me-2">{task.title}</li>
                        <button className="btn btn-sm btn-danger" onClick={()=>handleTaskDeleted(task.title)}>Delete</button>
                    </div>
                )))}
            </ul>
        </div>
    );
};


export default TaskList;
