// function addTask() {
//     const taskInput = document.getElementById("taskInput");
//     const taskText = taskInput.value.trim();
  
//     if (taskText === "") {
//       alert("Please enter a task.");
//       return;
//     }
  
//     const li = document.createElement("li");
  
//     const span = document.createElement("span");
//     span.textContent = taskText;
//     span.onclick = () => span.parentElement.classList.toggle("completed");
  
//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "Delete";
//     deleteBtn.className = "delete-btn";
//     deleteBtn.onclick = () => li.remove();

//     button
  
//     li.appendChild(span);
//     li.appendChild(deleteBtn);
  
//     document.getElementById("taskList").appendChild(li);
//     taskInput.value = "";
//   }
  
const addTask = () => {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (!taskText) {
    alert("Please enter a task.");
    return;
  }

  const taskList = document.getElementById("taskList");
  
  taskList.insertAdjacentHTML("beforeend", `
    <li>
      <span class="task-text">${taskText}</span>
      <div class="task-actions">
        <button class="complete-btn" onclick="this.closest('li').classList.toggle('completed')">✓</button>
        <button class="delete-btn" onclick="this.closest('li').remove()">×</button>
      </div>
    </li>
  `);

  taskInput.value = "";
  taskInput.focus();
};

// Modern event listener with optional chaining
document.getElementById("taskInput")?.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    addTask();
  }
});