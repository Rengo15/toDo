let toDoListItems = [];
 
let todolistSelector = null,
    todolistInput = null;
 
let editing = false;
let currentObject = null;
 
window.onload = () => {
    todolistSelector = document.getElementById("toDoList");
    todolistInput = document.getElementById("toDoInput");
    btnSave.onclick = () => {
        let value = todolistInput.value;
        if (!value) return;
        if (!editing)
            addItem(value);
        else updateItem(value);
    }
}
 
const addItem = (title) => {
    toDoListItems.push(title);
    let li = document.createElement('li');
    let btn0 = document.createElement("button");
    btn0.setAttribute("id", "edit" + title);
    let btn1 = document.createElement("button");
    btn1.setAttribute("id", "remove" + title);
 
    li.id = title;
    li.innerHTML = title;
 
    btn0.innerHTML = "Edit";
    btn1.innerHTML = "X";
 
    todolistSelector.appendChild(li);
    todolistSelector.appendChild(btn0);
    todolistSelector.appendChild(btn1);
    todolistInput.value = '';
 
    btn0.onclick = () => {
        editItem(title);
    }
    btn1.onclick = () => {
        removeItem(title);
    }
 
}
 
const updateItem = (value) => {
    let index = toDoListItems.findIndex(el => el === currentObject);
 
    document.getElementById(toDoListItems[index]).innerHTML = value;
    document.getElementById(toDoListItems[index]).id = value;
    toDoListItems[index] = value;
    todolistInput.value = '';
    editing = false;
    currentObject = null;
}
 
const editItem = (id) => {
    editing = true;
    currentObject = id;
    todolistInput.value = id;
    
    
}
 
 
const removeItem = (id) => {
    toDoListItems.filter(el => el !== id);
    document.getElementById(id).remove();
    document.getElementById('edit' + id).remove();
    document.getElementById('remove' + id).remove();
}
