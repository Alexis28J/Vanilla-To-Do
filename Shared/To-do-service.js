const baseUrl = "https://694115cf686bc3ca81658f6e.mockapi.io/api/v1/Todos";  //* 

export function getAllToDos() {  //*

    const apiUrl = baseUrl;

    return fetch(apiUrl)
        .then(response => response.json())  //* 
        //.then(result => console.log(result))  //per vedere cosa mi arriva dal server
        .then(result => result)  //* 
        //.then(result => displayToDos(result))  //per vedere i dati a schermo
        //.then(result => result) //per ritornare i dati a chi mi ha chiamato (Script.js)
        .catch(error => console.log('Aiuuuuuuuuuto!', error));  

}

export function getToDo(id) {   //*

     const apiUrl = baseUrl + "/" + id;

    return fetch(apiUrl)  //la fetch è la stessa di prima
        .then(response => response.json())
        .then(result => result)
        .catch(error => console.log('Aiuuuuuuuuuto!', error));
}


export function deleteToDo(id) {

    const apiUrl = baseUrl + "/" + id;

    return fetch(apiUrl, { method: 'DELETE' })  //* 
        .then(response => response.json())
        .then(result => result)
        .catch(error => console.error('Aiuuutoooo!', error))
}


export function changeDoneStatus(id, newStatus) {

    const apiUrl = baseUrl + "/" + id;

    return fetch(apiUrl, {
        method: 'PATCH', //o PUT
        headers: { 'content-type': 'application/json' },  //il contenuto che invierò sarà di tipo Json
        body: JSON.stringify({ done: newStatus })
    }).then(response => response.json())
      .then(result => result)
      .catch(error => console.log('Aiuuutoooo!', error));
}

export function PostToDo(todo) {
  
    const apiUrl = baseUrl;

    return fetch(apiUrl, {
        method: 'POST',
        headers: {'content-type':'application/json'},
        body: JSON.stringify(todo)
    }).then(res => res.json())
    .then(result => result)
    .catch(error => console.error('Error:', error));
}

