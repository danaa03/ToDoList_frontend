export const fetchTasks = async () => {
    const response = await fetch("http://localhost:5000/tasks/");
    return response.json();
};

export const addTask = async (title) => {
    const response = await fetch("http://localhost:5000/tasks/add-task", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
    });
    return response.json()
};
