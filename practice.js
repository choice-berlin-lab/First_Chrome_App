const greetingForm = document.querySelector(".js-form");
const greetingInput = greetingForm.querySelector("input");
const greetingText = document.querySelector(".js-greeting");

const GREETING_LS = "greeting";


function saveGreeting(){
    localStorage.setItem(GREETING_LS, )
}

function printText(text){
    greetingText.innerText = text;
    saveGreeting();
}

function loadGreeting(event){
    event.preventDefault();
    const currentText = greetingInput.value;
    printText(currentText);
}

function init(){
    loadGreeting();
}

init();




// const toDoForm = document.querySelector('.js-toDoForm');
// const toDoInput = toDoForm.querySelector('input');
// const toDoList = document.querySelector('.js-toDoList');

// const TODOS_LS = "todos";

// let toDos =[];

// function deleteToDo(event){
//     const btn = event.target;
//     const li = btn.parentNode;
//     toDoList.remove(li);
//     const deletedToDo = toDos.filter(function(evt){
//         return evt.id !== parseInt(li.id);
//     })
//     toDos = deleteToDo;
//     saveToDos();
// }

// function saveToDos(){
//     localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
// }

// function paintToDO(text){
//     const li = document.createElement('li');
//     const span = document.createElement('span');
//     const delBtn = document.createElement('button');
//     const newId = Date.now();
//     delBtn.innerText = "❌";
//     delBtn.addEventListener("click", deleteToDo);
//     span.innerText = text;
//     li.appendChild(span);
//     li.appendChild(delBtn);
//     li.id = newId;
//     toDoList.appendChild(li);
//     const toDoObj = {
//         text: text,
//         id: newId
//     }
//     toDos.push(toDoObj);
//     saveToDos();
// }

// function handleToDO(event){
//     event.preventDefault();
//     const currentValue = toDoInput.value;
//     paintToDO(currentValue);
//     toDoInput.value = "";
// }

// function loadToDo(){
//     const loadedToDo = localStorage.getItem(TODOS_LS);
//     if(loadedToDo !== null){
//         const parsedToDo = JSON.parse(loadedToDo);
//         parsedToDo.forEach(function(evt){
//             paintToDO(evt.text);
//         })
//     }
// }

// function init(){
//     loadToDo();
//     toDoInput.addEventListener("submit", handleToDO);    
// }

// init();