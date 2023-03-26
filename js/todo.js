const toDOForm = document.getElementById("todo-form");
const toDOInput = document.querySelector("#todo-form input"); 
const toDOList = document.getElementById("todo-list");

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newTodo;
    toDOList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDOInput.value;
    toDOInput.value = "";
    paintToDo(newTodo);
}

toDOForm.addEventListener("submit",handleToDoSubmit);