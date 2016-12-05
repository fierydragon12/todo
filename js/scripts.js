document.addEventListener("DOMContentLoaded", function(){

// add task
    var new_task = document.getElementById("new-task"),
        task_list = document.getElementById("todos-list"),
        task_template = document.querySelector("template").content,
        task_template_desc = task_template.querySelector("span.todo-desc");

    function handleAddTask(e) {
        if (e.target.id === "new-task" && e.keyCode !== 13) {
            return false;
        };

        var task_desc = new_task.value;
        if (task_desc.length === 0) {
            alert("Please, input your current task !!!");
            return false;
        } else {
            task_template_desc.textContent = task_desc;
        }

        task_list.appendChild(task_template.cloneNode(true));
        task_list.querySelector("li:last-child .remove-task").addEventListener("click", handleRemoveTask);
        new_task.value = '';
    }

    new_task.addEventListener("keydown", handleAddTask);
    document.getElementById("add-task").addEventListener("click", handleAddTask);


// remove task
    function handleRemoveTask(e) {
        var task = (e.target.parentNode.className === "todo-task") ? e.target.parentNode : e.target.parentNode.parentNode;
        task.remove();
    }

    function addEventListenerRemoveTask(list, event, fn) { 
        for (var i = 0, len = list.length; i < len; i++) {
            list[i].addEventListener(event, fn);
        }
    }

    addEventListenerRemoveTask(document.getElementsByClassName("remove-task"), "click", handleRemoveTask);
});
