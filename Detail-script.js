function displayToDo(todo) {
    const titleHeader = document.getElementById('todo-title');
    titleHeader.innerHTML = todo.title;
}


const searchParams = new URLSearchParams(window.location.search);
//window.location.search prende la parte della URL che contiene i parametri (dopo il ?)
//URLSearchParams è un oggetto che mi permette di lavorare con i parametri della URL
//location è un oggetto che rappresenta l'URL della pagina corrente
//search è una proprietà di location che contiene la stringa dei parametri della URL

//console.log(searchParams);

//prendo il valore del parametro todoId dalla URL
const id = searchParams.get('todoId');  
//searchParams è l'oggetto che contiene tutti i parametri della URL
//todoId è il nome del parametro che ho passato nella pagina Detail.html cioè ?todoId= (vedi Script.js)

//console.log(id);

getToDo(id).then(result => displayToDo(result));  //non confondere con displayToDos() che è "plurale", questa funzione è "singolare"

