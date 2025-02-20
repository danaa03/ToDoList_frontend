import { useState } from "react";
import { addTask } from "../services/api";

const AddTask = ({ onTaskAdded }) => {
    const [title, setTitle] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!title.trim()) {
            alert("Task title cannot be empty!");
            return;
        }
    
        try {
            const response = await addTask(title);
            onTaskAdded(response.task);  // Now correctly passes the task object
            setTitle("");  
        } catch (error) {
            alert(error.message);
        }
    };
    

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter Task"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default AddTask;
