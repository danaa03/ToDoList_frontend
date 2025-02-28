export const fetchUsers = async () => {
    const response = await fetch("http://localhost:5000/users/");
    return response.json();
};

export const addUser = async (email, password) => {
    const response = await fetch("http://localhost:5000/users/add-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Signup failed");
    }

    return response.json();
};

export const login = async (email, password) => {
    const response = await fetch("http://localhost:5000/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });

    let data;
    try {
        data = await response.json();
    } catch (error) {
        throw new Error(`Invalid JSON response: ${error.message}`);
    }

    if (!response.ok) {
        throw new Error(data?.message || `Login failed: ${response.statusText}`);
    }

    localStorage.setItem("token", data.access_token);
    return data;
};

export const logout = () => {
    localStorage.removeItem("token");
}