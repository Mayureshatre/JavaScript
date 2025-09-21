let arrTasks = [];
const taskInput = document.getElementById("task");
const priorityInput = document.getElementById("priority");
const submitButton = document.getElementById("submit");
const sortButton = document.getElementById("sort");
const deleteAllButton = document.getElementById("deleteAll");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  CheckValidity();
});
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    CheckValidity();
  }
});
sortButton.addEventListener("click", (e)=>{
  e.preventDefault();
  sortTask();
});
deleteAllButton.addEventListener("click", (e)=>{
  e.preventDefault();
  deleteAllTask();
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
    completed: false,
  };
  arrTasks.push(task);
  taskInput.value = "";
  priorityInput.value = "";

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

    // li.innerHTML = `<span class="task&priority">${obj.task} - (${obj.priority})</span>`;

    let taskSpan = document.createElement("span");
    taskSpan.className = "task&priority";
    taskSpan.textContent = `${obj.task} - (${obj.priority})`;
    
    let deleteButton = document.createElement("button");
    deleteButton.classList = "delete";
    deleteButton.innerHTML = `<img src="https://cdn-icons-png.flaticon.com/512/6460/6460112.png " alt="Delete">`;
    deleteButton.addEventListener("click", (e) => {
      e.preventDefault();
      li.remove();
      // arrTasks = arrTasks.filter(
      //   (kaam) => kaam.task !== obj.task || kaam.priority !== obj.priority
      // );
      arrTasks.splice(arrTasks.indexOf(obj), 1);
      displayTask();
    });

    let editButton = document.createElement("button");
    editButton.classList = "edit";
    editButton.innerHTML = `<img src="https://cdn-icons-png.flaticon.com/512/4476/4476348.png " alt="Edit">`;
    editButton.addEventListener("click", (e) => {
        e.preventDefault();
        // console.log(obj);
        editTask(arrTasks.indexOf(obj));
      });
    
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = obj.completed || false;  
    checkBox.classList = "checkBox";
    if(obj.completed){
      li.classList.add("completed");
    }
    checkBox.addEventListener("change", (e) => {
      obj.completed  = checkBox.checked;
      if (obj.completed) {
        // li.style.textDecoration = "line-through";
        li.classList.add("completed");
      } else {
        // li.style.textDecoration = "none";
        li.classList.remove("completed");
      }
    });

    li.appendChild(checkBox);
    li.appendChild(taskSpan);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
}
function deleteAllTask() {
  arrTasks = [];
  displayTask();
}

function sortTask() {
  const priorityMap = {
    High: 1,
    Medium: 2,
    Low: 3,
  };
  arrTasks.sort((a, b) => {
    return priorityMap[a.priority] - priorityMap[b.priority];
  });
  displayTask();
}

function editTask(index) {
  let kaam = arrTasks[index];
  taskInput.value = kaam.task;
  priorityInput.value = kaam.priority;
  arrTasks.splice(index, 1);
  displayTask();
}
