const API_URL = "http://localhost:5000/tasks/";
const tAPI_URL = "http://localhost:5000/tasks/add-task"

export const fetchTasks = async () => {
    const response = await fetch(API_URL);
    return response.json();
};

export const addTask = async (title) => {
    const response = await fetch(tAPI_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
    });
    return response.json()
};

export const xxx = async () => {
    const response = await fetch("http://localhost:5000/tasks/api");
    return response.json();
};
