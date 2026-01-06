import {postToDo} from "../Shared/To-do-service.js"

function saveToDo(event) {   //*
    event.preventDefault();  //*
    // console.log(event);
    //const form = event.target;
    const form = document.getElementById('todo-form');
    const data = new FormData(form);  //*

    const newTodo = {   //*
        title: data.get('title'),
        description: data.get('description'),
        endDate: data.get('end-date'),
        color: data.get('color'),
        done: false,
        creationDate: new Date().toISOString()
    };

    postToDo(newTodo)       //*
    .then(createdToDo => {  //*
        console.log('Created To Do:', createdToDo);
        form.reset();    //*
        window.location.assign('../');  //*
    })
}

document.getElementById("todo-form")   
.addEventListener('submit', saveToDo)
