
//La differenza tra la funzione displayToDos() e displayToDo() è che la prima mostra una lista di to-do, mentre la seconda mostra i dettagli di un singolo to-do.
//A differenza di displayToDos(), qui non c'è bisogno di un ciclo for, perché sto mostrando i dettagli di un singolo to-do, non di una lista
function displayToDo(todo) {
    
    const titleHeader = document.getElementById('todo-title');
    titleHeader.innerHTML = todo.title;

    const descriptionMain = document.getElementById('todo-description');
    descriptionMain.innerHTML = todo.description;

    const creationDataMain = document.getElementById('todo-creationdata');
    creationDataMain.innerHTML = todo.creationDate;

    const doneMain = document.getElementById('todo-done');
    doneMain.innerHTML = todo.done;

    const endDataMain = document.getElementById('todo-enddata');
    endDataMain.innerHTML = todo.endDate;

    const colorMain = document.getElementById('todo-color');
    colorMain.innerHTML = todo.color;

}


const searchParams = new URLSearchParams(window.location.search);
//window.location.search prende la parte della URL che contiene i parametri (dopo il ?)
//URLSearchParams è un oggetto che mi permette di lavorare con i parametri della URL
//location è un oggetto che rappresenta l'URL della pagina corrente
//search è una proprietà di location che contiene la stringa dei parametri della URL

//console.log(searchParams);

//prendo il valore del parametro todoId dalla URL
//es: se la URL è Detail.html?todoId=3, allora id sarà 3
const id = searchParams.get('todoId');
//searchParams è l'oggetto che contiene tutti i parametri della URL
//todoId è il nome del parametro che ho passato nella pagina Detail.html cioè ?todoId= (vedi Script.js)

//console.log(id);

getToDo(id).then(result => displayToDo(result));  //non confondere con displayToDos() che è "plurale", questa funzione è "singolare"

