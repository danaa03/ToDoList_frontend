import React, { useEffect, useState } from "react";
// import { fetchTasks } from "../services/tasks";
import AddTask from "./AddTask"; 
import { getProtectedTasks } from "../services/tasks";

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

    return (
        <div className="bg-dark text-light">
                <AddTask onTaskAdded={handleTaskAdded} />
            <ul>
                { !Array.isArray(tasks) || tasks.length === 0 ? ( 
                    <li>No tasks found</li>
                ) :
              
                (tasks.map((task) => (
                    <li key={task.id}>{task.title}</li>
                )))}
            </ul>
        </div>
    );
};


export default TaskList;
