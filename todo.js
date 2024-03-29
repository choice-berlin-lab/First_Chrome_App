const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos"

let toDos = [];//deleteToDo안에서 변수로 사용해야 하기때문

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id); //li.id가 string이기 때문
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDO(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement('span');
    const newId = Date.now();
    delBtn.innerText ="❌";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
    saveToDos();
} 

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDO(currentValue);
    toDoInput.value = "";
}

function loadToDo(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDO(toDo.text);
        })
    }
}

function init(){
    loadToDo();
    toDoForm.addEventListener("submit",handleSubmit);
}

init();
