import {getToDo, deleteToDo, changeDoneStatus} from "../Shared/To-do-service.js"  //*

function displayToDo(todo) {      //*
    const titleHeader = document.getElementById('todo-title');
    titleHeader.innerHTML = todo.title;

    const descriptionMain = document.getElementById('todo-description');
    descriptionMain.innerHTML = todo.description;

    const creationDataMain = document.getElementById('todo-creation-data');
    //creationDataMain.innerHTML = todo.creationDate;
    creationDataMain.innerHTML = formaDate(todo.creationDate);    //*

    const endDataMain = document.getElementById('todo-end-data');
    //endDataMain.innerHTML = todo.endDate;
    //endDataMain.innerHTML = formaDate(todo.endDate); 
     if (todo.endDate === "") {
        endDataMain.innerHTML = "Nessuna";
    } else {
        endDataMain.innerHTML = formaDate(todo.endDate);  //*
    }    

    const doneMain = document.getElementById('todo-done');
    doneMain.innerHTML = todo.done;
    //invece di printare true o false, possiamo personalizzare il messaggio
    if (todo.done) {     //se todo.done è true
        doneMain.innerHTML = 'Completato';
    } else {
        doneMain.innerHTML = 'Da completare';
    }

    const statusBtn = document.getElementById('status-btn');
    if (todo.done) {
        statusBtn.innerHTML = "Riattiva";
    }else{
        statusBtn.innerHTML = "Completa";
    }


    const colorDivMain = document.getElementById('todo-color');
    colorDivMain.style.backgroundColor = todo.color; //* 
}


function formaDate(dateISO) {  //*
    const date = new Date(dateISO);  //*

    // const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    // return formattedDate;

    //Meglio con un metodo più semplice:
    const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    };

    return date.toLocaleDateString("it-IT", options);   //*

}


function deleteToDoAndRedirect() {
    if (confirm("Vuoi veramente cancellare il To-do???")) {
        deleteToDo(selectedTodo.id).then(_ => {  //*
            window.location.assign('../')     //* 
        });    
    }
}

function changeStatus() {  //*
    changeDoneStatus(selectedTodo.id, !selectedTodo.done)   //* 
    .then(_ => {  //*
        selectedTodo.done = !selectedTodo.done;  //*
        displayToDo(selectedTodo);   //*
    })
}

document.getElementById("status-btn")
.addEventListener("click", changeStatus);  //* 

document.getElementById("delete-btn")
.addEventListener("click", deleteToDoAndRedirect)  //* 



const searchParams = new URLSearchParams(window.location.search);  //*
//console.log(searchParams);

const id = searchParams.get('todoId');  //*
//console.log(id);

//getToDo(id).then(result => displayToDo(result));  
//non confondere con displayToDos() che è "plurale", questa funzione è "singolare"

let selectedTodo;  //* 

getToDo(id).then(result => {   //*
    selectedTodo = result;  //* 
    displayToDo(selectedTodo);  //* 
});


