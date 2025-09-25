const input = document.getElementById("task-input");
    const addButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");

    function addTask() {
      const taskText = input.value.trim();

      if (taskText === "") return;

      const li = document.createElement("li");
      li.textContent = taskText;

      li.addEventListener("click", () => {
        li.classList.toggle("completed");
      });

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "X";
      removeBtn.classList.add("remove");

      removeBtn.addEventListener("click", () => {
        taskList.removeChild(li);
      });

      li.appendChild(removeBtn);
      taskList.appendChild(li);

      input.value = "";
    }

    addButton.addEventListener("click", addTask);