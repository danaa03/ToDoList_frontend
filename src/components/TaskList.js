import React, { useEffect, useState } from "react";
import { fetchTasks, xxx } from "../services/api";
import AddTask from "./AddTask"; 

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks()
            .then((data) => {
                console.log("Fetched Tasks:", data);  
                setTasks(data);
            })
            .catch((error) => console.error("Error fetching tasks:", error));
    }, []);

    const handleTaskAdded = async () => {
        const updatedTasks = await fetchTasks();
        setTasks(updatedTasks);
    };
    

    return (
        <div>
            <AddTask onTaskAdded={handleTaskAdded} />
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
