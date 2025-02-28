export const addTask = async (title) => {
    try {
        const response = await fetch("http://localhost:5000/tasks/add-task", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify({ title })
        });
        return response.json();
    } catch (error) {
        console.error("Error adding task:", error);
        throw(error);
    }
};

export const getProtectedTasks = async () => {
    try {
        const response = await fetch("http://localhost:5000/tasks/", {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });

        const text = await response.text();

        if (!text) {
            throw new Error("Empty response from server");
        }

        const data = JSON.parse(text);
        return data;
    } catch (error) {
        console.error("Error in getProtectedData:", error);
        throw error;
    }
};

