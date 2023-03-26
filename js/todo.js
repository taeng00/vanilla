const toDOForm = document.getElementById("todo-form");
const toDOInput = document.querySelector("#todo-form input"); 
const toDOList = document.getElementById("todo-list");


const TODOS_KEY = "todos";

let toDos = [];

function savetoDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li =event.target.parentElement;
    console.log(li.id);
    li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id =newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
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
    console.log(toDOInput.value);
    toDOInput.value = "";
    const newTodoObj ={
        text:newTodo,
        id: Date.now()
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    savetoDos();
}

toDOForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    console.log(parsedToDos);
    parsedToDos.forEach(paintToDo);
}