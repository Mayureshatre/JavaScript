let arrTasks = [];
const taskInput = document.getElementById("task");
const priorityInput = document.getElementById("priority");
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", (e) => {
  e.preventDefault(CheckValidity());
});
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    CheckValidity();
  }
});

function CheckValidity() {
  if (taskInput.value === "" || taskInput.value === null) {
    alert("Please enter a task");
    return false;
  } else {
    addTask();
  }
}

function addTask() {
  const task = {
    task: taskInput.value,
    priority: priorityInput.value,
  };
  arrTasks.push(task);
  displayTask();
}

function displayTask() {
  arrTasks.forEach((obj) => {
    if (arrTasks.length === 0) {
            const taskList = document.getElementById("taskList");
            taskList.innerHTML = "<p>No tasks available</p>";
        }
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    li.innerHTML = `<span class="task&priority">${obj.task} - (${obj.priority})</span><button class="delete"><img src="https://tse4.mm.bing.net/th/id/OIP.OLhf-Opp-n2b1r8coDAjRwHaHa?pid=Api&P=0&w=300&h=300" alt="Delete"></button>`;
    deleteButton.addEventListener("click", (e) => {
      e.preventDefault();
      li.remove();
      arrTasks = arrTasks.filter(
        (kaam) => kaam.task !== obj.task || kaam.priority !== obj.priority
      );
    });
  });
}
function deleteTask() {}
