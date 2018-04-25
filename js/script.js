var taskList = document.querySelector(".task-list");
var addTaskButton = document.querySelector(".add-task-btn");
var newTask = document.querySelector(".new-task");
var clearAllBtn = document.querySelector(".clear-all-btn");
var i = 0;
var num = 0;

var data = [];

clearAllBtn.addEventListener("click", clearAll);

addTaskButton.addEventListener("click", function() {
    if (newTask.value) addTask(newTask.value);
});
//-----Добавление отметки о выполнении//    
function markItem() {
    this.classList.toggle("task-checked");
}
//-----Удаление всех элеметов из списка//
function clearAll() {
    while (taskList.firstChild) {
            taskList.firstChild.remove();
        }
    data = [];
}
//-----Создание задачи и ее добавление в список//
function addTask(newTaskText) {
    var li = document.createElement("li");
    li.classList.add("task-item");
    i++;
    //-----Блок с текстом задачи//
    var textTask = document.createElement("div");
    textTask.classList.add("task-text", "flex-center");
    textTask.addEventListener("click", markItem);
    //-----Блок с книпками для задачи задачи//
    var btnBlock = document.createElement("div");
    btnBlock.classList.add("btn-block", "flex-center");
    
    var checkbox = document.createElement("input");
    checkbox.classList.add("edit");
    checkbox.id = "edit" + i;
    checkbox.type = "checkbox";
    //-----Кнопка для редактирования задачи//
    var editBtn = document.createElement("label");
    editBtn.classList.add("edit-btn", "block-btns-style", "flex-center");
    editBtn.setAttribute("for", "edit" + i);
    editBtn.innerHTML = "<i class='far fa-edit'></i>";
    editBtn.addEventListener("click", function Edit() {
        var item = this.parentNode.parentNode;
        var position = data.indexOf(item.firstChild.innerText);
        this.classList.toggle("checked");
        if (this.classList.contains("checked")) {
            item.firstChild.removeEventListener("click", markItem);
            item.firstChild.contentEditable = "true";
            num = position;
        } else {
            item.firstChild.contentEditable = "false";
            item.firstChild.addEventListener("click", markItem);
            data[num] = item.firstChild.innerText;
        }
        console.log(data);
    });
    //-----Кнопка для удаления задачи//
    var deleteBtn = document.createElement("button");
    deleteBtn.classList.add("del-btn", "block-btns-style", "flex-center");
    deleteBtn.innerHTML = "<i class='far fa-trash-alt'></i>";
    deleteBtn.addEventListener("click", function Delete() {
        var item = this.parentNode.parentNode;
        item.remove();
        var position = data.indexOf(item.firstChild.innerText);
        data.splice(position, 1);
    });
    //-----Добавление копок в блок кнопок задачи//
    btnBlock.appendChild(checkbox);
    btnBlock.appendChild(editBtn);
    btnBlock.appendChild(deleteBtn);
    //-----Вставка текста в блок текста задачи и добавление в data//
    textTask.innerHTML = newTaskText;
    data.push(newTaskText);
    newTask.value = '';
    //-----Добавление блока с текстом и блока с кнопками//
    li.appendChild(textTask);
    li.appendChild(btnBlock);
    taskList.insertBefore(li, taskList.firstChild);
}