
# 🧠 Smart Task Manager (Vanilla JS)

A simple yet powerful **To-Do List** web app built using **HTML**, **CSS**, and **Vanilla JavaScript** — no frameworks, no libraries, and no backend needed! Everything is stored in the browser using `localStorage` for a seamless and persistent user experience. 💾

---

## 🚀 Features

✨ Create tasks with:
- **Title** 📝
- **Description** 🧾 *(optional)*
- **Due Date** 📅
- **Priority** 🔴🟡🟢 (High, Medium, Low)

🧩 Functionalities:
- ➕ Add new tasks
- 🛠 Edit existing tasks
- 🗑 Delete tasks with confirmation
- 🔍 Filter tasks by priority
- 💾 Persistent local storage
- ✅ Real-time updates in the browser

---

## 📷 video









https://github.com/user-attachments/assets/4c997020-0bb6-4acc-ae38-6c78dd15796b








---

## 🛠️ How to Use

1. **Clone the repository** or download the files:
   ```bash
   git clone https://github.com/your-username/task-manager-app.git
   cd task-manager-app
````

2. **Open `index.html`** in your browser:

   * Double-click the file, or
   * Use a local server like Live Server for better experience

3. **Start managing your tasks!**

---

## 🧪 App Flow Summary

### 📥 Load tasks

```js
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
```

### 📝 Add or Edit tasks

* Fills the form and handles both new task creation and existing task editing:

```js
function addTask() {
  // create or update task, then save and refresh
}
```

### 📋 Display tasks with filters

```js
function displayTasks() {
  // filters tasks by priority and renders them in the DOM
}
```

### ✏️ Edit & 🗑 Delete with confirmation

```js
function editTask(id) { ... }
function deleteTask(id) { ... }
```

---

## 📁 File Structure

```
task-manager-app/
├── index.html       # App layout
├── style.css        # App styling
├── script.js        # App logic
└── README.md        # This file!
```

---

## 🧠 Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Browser `localStorage`

---

## 🌟 Future Improvements (Optional Ideas)

* 🔔 Add reminders or alerts for upcoming due dates
* 🌙 Add dark mode toggle
* 📱 Make it fully responsive for mobile use
* ⏳ Sort tasks by due date or priority
* ☁️ Add cloud sync (Firebase, Supabase)

---

## 👨‍💻 Author

Made with 💙 by **\[Your Name]**
📎 GitHub: [@your-username](https://github.com/your-username)

---

## 📄 License

Licensed under the [MIT License](LICENSE).
Feel free to use, share, and modify!

---

```


