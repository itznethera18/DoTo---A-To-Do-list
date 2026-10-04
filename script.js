const taskInput = document.getElementById("taskInput");
const pushButton = document.getElementById("push");
const taskList = document.querySelector(".tasks");


function addTask() {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const task = document.createElement("div");
    task.classList.add("task");

    const taskLeft = document.createElement("div");
    taskLeft.classList.add("task-left");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("task-check");

    const text = document.createElement("span");
    text.classList.add("task-text");
    text.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "✕";

    taskLeft.appendChild(checkbox);
    taskLeft.appendChild(text);

    task.appendChild(taskLeft);
    task.appendChild(deleteButton);

    taskList.appendChild(task);

    taskInput.value = "";

    checkbox.addEventListener("change", function () {

        if (checkbox.checked) {
            text.style.textDecoration = "line-through";
            text.style.opacity = "0.5";
        } else {
            text.style.textDecoration = "none";
            text.style.opacity = "1";
        }

    });

    deleteButton.addEventListener("click", function () {
        task.remove();
    });
}


pushButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        addTask();
    }

});