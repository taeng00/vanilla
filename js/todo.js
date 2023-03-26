const toDOForm = document.getElementById("todo-form");
const toDOInput = document.querySelector("#todo-form input"); 
const toDOList = document.getElementById("todo-list");


const TODOS_KEY="todos";

const toDos = [];
function savetoDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
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

function sayHello(item){
    console.log("this is the turn of", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    console.log(parsedToDos);
    parsedToDos.forEach(sayHello);
};