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
    return response.json()
};

export const checkUser = async (email, password) => {
    // const response = await fetch("http://localhost:5000/users/add-user", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ email, password }),
    // });
    // return response.json()
};
