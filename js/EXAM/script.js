let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

document.addEventListener("DOMContentLoaded", () => {
    displayTasks();
});

document.getElementById("taskForm").addEventListener("submit", function (e) {
    e.preventDefault();
    addTask();
});

document.getElementById("filter").addEventListener("change", displayTasks);

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
    const title = document.getElementById("title").value.trim();
    const description = document.getElementById("description").value.trim();
    const dueDate = document.getElementById("dueDate").value;
    const priority = document.getElementById("priority").value;
    const taskId = document.getElementById("taskId").value;

    if (!title || !dueDate) {
        alert("Please enter both title and due date.");
        return;
    }

    if (taskId) {
        // Edit existing task
        const task = tasks.find(t => t.id === taskId);
        if (task) {
            task.title = title;
            task.description = description;
            task.dueDate = dueDate;
            task.priority = priority;
        }
    } else {
        // Create new task
        const newTask = {
            id: Date.now().toString(),
            title,
            description,
            dueDate,
            priority
        };
        tasks.push(newTask);
    }

    saveTasks();
    displayTasks();
    document.getElementById("taskForm").reset();
    document.getElementById("taskId").value = "";
}

function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    const filter = document.getElementById("filter").value;
    const filteredTasks = filter === "all" ? tasks : tasks.filter(t => t.priority === filter);

    if (filteredTasks.length === 0) {
        taskList.innerHTML = "<p>No tasks to show.</p>";
        return;
    }

    filteredTasks.forEach(task => {
        const div = document.createElement("div");
        div.className = `task ${task.priority}`;
        div.innerHTML = `
          <strong>${task.title}</strong><br>
          ${task.description ? `<em>${task.description}</em><br>` : ""}
          <small>Due: ${task.dueDate}</small><br>
          <small>Priority: ${task.priority}</small><br>
          <button onclick="editTask('${task.id}')" style="margin-right: 10px;">Edit</button>
          <button onclick="deleteTask('${task.id}')">Delete</button>
        `;
        taskList.appendChild(div);
    });
}

function editTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        document.getElementById("taskId").value = task.id;
        document.getElementById("title").value = task.title;
        document.getElementById("description").value = task.description;
        document.getElementById("dueDate").value = task.dueDate;
        document.getElementById("priority").value = task.priority;
    }
}

function deleteTask(id) {
    if (confirm("Are you sure you want to delete this task?")) {
        tasks = tasks.filter(t => t.id !== id);
        saveTasks();
        displayTasks();
    }
}
