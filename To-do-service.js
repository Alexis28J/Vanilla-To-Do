function getAllToDos() {

    const apiUrl = "https://694115cf686bc3ca81658f6e.mockapi.io/api/v1/Todos";
    //Per copiare questo url, sono andato dentro del mio progetto ('To Do App') nel sito mockApi e ho cliccato su Todos (sopra la barretta) 
    //e si mi è aperto una pagina con tutti i dati (api). Infine ho copiato l'url della pagina.

    return fetch(apiUrl)
        .then(response => response.json())
        //.then(result => console.log(result))  //per vedere cosa mi arriva dal server
        .then(result => result)  //result è il nome che do io alla risposta che mi arriva dal server già convertita in json
        //.then(result => displayToDos(result))  //per vedere i dati a schermo
        //.then(result => result) //per ritornare i dati a chi mi ha chiamato (Script.js)
        .catch(error => console.log('Aiuuuuuuuuuto!', error));

}

//Funzione per prendere un to-do specifico in base al suo id
function getToDo(id) {   //id è l'id del to-do che voglio prendere

    const apiUrl = "https://694115cf686bc3ca81658f6e.mockapi.io/api/v1/Todos/" + id;

    return fetch(apiUrl)  //la fetch è la stessa di prima
        .then(response => response.json())
        .then(result => result)
        .catch(error => console.log('Aiuuuuuuuuuto!', error));

}


function deleteTodo(id) {

    const apiUrl = "https://694115cf686bc3ca81658f6e.mockapi.io/api/v1/Todos/" + id;

    return fetch(apiUrl, { method: 'DELETE' })
        .then(response => response.json())
        .then(result => result)
        .catch(error => console.error('Aiuuutoooo!', error))
}


function changeDoneStatus(id, newStatus) {

    const apiUrl = "https://694115cf686bc3ca81658f6e.mockapi.io/api/v1/Todos/" + id;

    return fetch(apiUrl, {
        method: 'PATCH', //o PUT
        headers: { 'content-type': 'application/json' },  //il contenuto che invierò sarà di tipo Json
        body: JSON.stringify({ done: newStatus })
    }).then(response => response.json())
      .then(result => result)
      .catch(error => console.log('Aiuuuto!', error));
}

function createTodo(todo) {
  return fetch('https://694115cf686bc3ca81658f6e.mockapi.io/api/v1/Todos/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo)
  })
  .then(response => response.json());
}

