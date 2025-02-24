import React from "react";
import TaskList from "../components/TaskList";

const Tasks = () => {
    return (
        <div className='bg-warning pl-5'>
            <h1>To-Do List</h1>
            <TaskList />
        </div>
    );
};

export default Tasks;
