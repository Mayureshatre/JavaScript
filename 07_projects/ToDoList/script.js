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
  taskInput.value = "";

  displayTask();
}

function displayTask() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  if (arrTasks.length === 0) {
    taskList.innerHTML = "<p>No tasks available</p>";
    return;
  }

  arrTasks.forEach((obj) => {
    let li = document.createElement("li");
    let deleteButton = document.createElement("button");
    let editButton = document.createElement("button");

    li.innerHTML = `<span class="task&priority">${obj.task} - (${obj.priority})</span>`;
    deleteButton.classList = "delete";
    deleteButton.innerHTML = `<img src="https://tse4.mm.bing.net/th/id/OIP.OLhf-Opp-n2b1r8coDAjRwHaHa?pid=Api&P=0&w=300&h=300" alt="Delete">`;
    editButton.classList = "edit";
    editButton.innerHTML = `<img src="https://icon-library.com/images/edit-icon/edit-icon-0.jpg" alt="Edit">`;

    li.appendChild(editButton)
    li.appendChild(deleteButton)
    taskList.appendChild(li);

    deleteButton.addEventListener("click", (e) => {
      e.preventDefault();
      li.remove();
      // arrTasks = arrTasks.filter(
      //   (kaam) => kaam.task !== obj.task || kaam.priority !== obj.priority
      // );
      arrTasks.splice(arrTasks.indexOf(obj), 1)
      displayTask();
    });
  });
}
function deleteAllTask() {}

function sortTask(){
  const priorityMap = {
    High: 1,
    Medium: 2,
    Low: 3
  }
  arrTasks.sort((a, b) => {
    return priorityMap[a.priority] - priorityMap[b.priority]
  })
  displayTask()
}

const allTasks = document.querySelectorAll('li')
const arrAllTasks = Array.from(allTasks);

arrAllTasks.forEach((taskitem) => {
  editButton.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(taskitem);
    editTask(arrAllTasks.indexOf(taskitem));
  })
})

function editTask(index){
  const kaam = arrTasks(index)
  taskInput.value = kamm.task;
  priorityInput.value = kaam.priority;
  arrTasks.splice(index,1)
  displayTask();
}