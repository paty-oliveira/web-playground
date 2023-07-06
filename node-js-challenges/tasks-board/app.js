const columns = document.querySelectorAll(".column");
const tasks = document.querySelectorAll(".task");
let dragItem = null;

function dragStart() {
  console.log("drag started");
  dragItem = this;
  setTimeout(() => (this.className = "invisible-task"), 0);
}

function dragEnd() {
  console.log("drag ended");
  this.className = "task";
  dragItem = null;
}

tasks.forEach((task) => {
  task.addEventListener("dragstart", dragStart);
  task.addEventListener("dragend", dragEnd);
});

function dragOver(e) {
  e.preventDefault();
  console.log("drag over");
}

function dragEnter() {
  console.log("drag entered");
}

function dragLeave() {
  console.log("drag left");
}

function dragDrop() {
  console.log("drag dropped");
  this.append(dragItem);
}

columns.forEach((column) => {
  column.addEventListener("dragover", dragOver);
  column.addEventListener("dragenter", dragEnter);
  column.addEventListener("dragleave", dragLeave);
  column.addEventListener("drop", dragDrop);
});


function handleOnClick(e) {
  e.preventDefault();
  const inputField = document.getElementById("task-input");
  const taskDescription = inputField.value;
  inputField.value = ''
  console.log(taskDescription);
}

const addButton = document.getElementById("add-btn");
addButton.addEventListener('click', handleOnClick);