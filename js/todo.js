const toDOForm = document.getElementById("todo-form");
const toDOInput = document.querySelector("#todo-form input"); 
const toDOList = document.getElementById("todo-list");

const toDos = [];
function savetoDos(){
    localStorage.setItem("todos",toDos);
}

function deleteToDo(event){
    const li =event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDOList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDOInput.value;
    toDOInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    savetoDos();
}

toDOForm.addEventListener("submit",handleToDoSubmit);