
//Funzione per mostrare i to-dos nella pagina principale (lista di to-dos)
function displayToDos(todos) {

    const toDosContainer = document.getElementById('to-dos-container');
    toDosContainer.innerHTML = '';  //pulisco la pagina ogni giro

    for (const todo of todos) {  //a differenza di displayToDo(), qui creo gli elementi in un ciclo for perché sono più di uno
        const card = document.createElement('div');   //mi creo un div chiamato card
        card.classList.add('to-do-card');

        const titleSpan = document.createElement('span');
        titleSpan.appendChild(document.createTextNode(todo.title));
        card.appendChild(titleSpan); 

        toDosContainer.appendChild(card);

        const detailBtn = document.createElement('button');
        detailBtn.appendChild(document.createTextNode('🠆'));      //🠆: carattere unicode (testo con effetto)
        //append e appendChild sono simili, ma appendChild accetta solo nodi, mentre append accetta anche stringhe
        detailBtn.classList.add('detail-btn');

        detailBtn.addEventListener('click', () => {  //()=> {}) è una funzione freccia (arrow function) 
            window.location.assign('./Detail.html?todoId=' + todo.id) }) ; 
            //quando clicco sul bottone vado alla pagina Detail.html
            //window si riferisce alla finestra del browser //location è un oggetto che rappresenta l'URL della pagina corrente
            //assign è un metodo che carica un nuovo documento
            //?todoId= è un parametro che passo alla pagina Detail.html per identificare il to-do selezionato
        
        card.appendChild(detailBtn);

        //Se invece di un botone, voglio mettere un link:
        //Vedi repository del prof.  ---  detailLink

         toDosContainer.appendChild(card);

        const alphabeticalBtn = document.getElementById('alphabetical-btn');
        alphabeticalBtn.addEventListener('click', () => {
            const sortedTodos = todos.sort((a, b) => a.title.localeCompare(b.title));
            displayToDos(sortedTodos); 
        });

        const creationDateBtn = document.getElementById('creation-date-btn');   
        creationDateBtn.addEventListener('click', () => {
            const sortedTodos = todos.sort((a, b) => new Date(b.creationDate) - new Date(a.creationDate));
            displayToDos(sortedTodos);
        });
         
        
    }

}

getAllToDos().then(results => displayToDos(results));  
//chiamo la funzione getAllToDos() che mi restituisce una promessa
//quando la promessa viene risolta, chiamo la funzione displayToDos() passando i risultati come argomento


//////////////////////////////////////////////////////////////////////////////////////////////
//TASK per domani (16.11.2025):  
//1)Mettere le altre voci dentro del main
//2)aggiungere due tasti nella home (lista di To Do)
// - mette in ordine alfabetico
// - mette in ordine dal più nuovo al più vecchio in base alla creationDate


