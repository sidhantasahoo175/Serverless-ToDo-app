const API_URL = "https://tk7rl10dw4.execute-api.ap-south-1.amazonaws.com/add-task";

async function addTask() {
    const task = document.getElementById("task").value;

    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ task })
    });

    const data = await response.json();
    alert(data.message);
}