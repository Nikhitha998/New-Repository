// Select elements
const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// Add task
addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
if (e.key === "Enter") addTask();
});

function addTask() {
const taskText = taskInput.value.trim();
if (taskText === "") return;

const li = document.createElement("li");
li.className = "task-item";

const span = document.createElement("span");
span.textContent = taskText;
span.className = "task-text";

const editBtn = document.createElement("button");
editBtn.textContent = "Edit";
editBtn.className = "edit-btn";
editBtn.onclick = () => editTask(span);

const deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete";
deleteBtn.className = "delete-btn";
deleteBtn.onclick = () => li.remove();

span.onclick = () => span.classList.toggle("completed");

li.appendChild(span);
li.appendChild(editBtn);
li.appendChild(deleteBtn);
taskList.appendChild(li);

taskInput.value = "";
}

// Edit a task
function editTask(span) {
const newText = prompt("Edit task:", span.textContent);
if (newText !== null && newText.trim() !== "") {
span.textContent = newText.trim();
}
}
