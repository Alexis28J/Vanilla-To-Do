
//La differenza tra la funzione displayToDos() e displayToDo() è che la prima mostra una lista di to-do, mentre la seconda mostra i dettagli di un singolo to-do.
//A differenza di displayToDos(), qui non c'è bisogno di un ciclo for, perché sto mostrando i dettagli di un singolo to-do, non di una lista
function displayToDo(todo) {
    
    const titleHeader = document.getElementById('todo-title');
    titleHeader.innerHTML = todo.title;

    const descriptionMain = document.getElementById('todo-description');
    descriptionMain.innerHTML = todo.description;

    const creationDataMain = document.getElementById('todo-creationdata');
    //creationDataMain.innerHTML = todo.creationDate;
    creationDataMain.innerHTML = formaDate(todo.creationDate);

    const endDataMain = document.getElementById('todo-enddata');
    //endDataMain.innerHTML = todo.endDate;
    endDataMain.innerHTML = formaDate(todo.endDate);

    const doneMain = document.getElementById('todo-done');
    doneMain.innerHTML = todo.done;

    //invece che dica true o false, possiamo personalizzare il messaggio
    if (todo.done) { //se todo.done è true
        doneMain.innerHTML = 'Completato';
    } else {
        doneMain.innerHTML = 'Da completare';
    }

    // const colorMain = document.getElementById('todo-color');
    // colorMain.innerHTML = todo.color;
    const colorDivMain = document.getElementById('todo-color');
    colorDivMain.style.backgroundColor = todo.color; //imposto lo sfondo del div con l'id todo-color al colore del to-do
}

function formaDate(dateISO) {  //Funzione per cambiare il formato delle date a uno più leggibile
    const date = new Date(dateISO);  //dateISO è una stringa in formato ISO 8601 (es: "2024-06-15T00:00:00Z")

    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    return formattedDate;

    //O con un metodo più semplice:
    //const date = new Date(dateISO);
    //const options = {
    //year: "numeric",
    //month: "numeric",
    //day: "numeric",
    //};
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

