import { useState } from "react";
import { addTask } from "../services/tasks";

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
            onTaskAdded(response.task);  
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
                className="mt-5 h-32 ms-4 me-2"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <button type="submit" className="btn btn-warning">Add Task</button>
        </form>
    );
};

export default AddTask;
