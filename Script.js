import { getAllToDos, changeDoneStatus } from "./Shared/To-do-service.js"

function displayToDos(todos) {  //*

    const toDosContainer = document.getElementById('to-dos-container');
    toDosContainer.innerHTML = '';  //pulisco la pagina ogni giro

    for (const todo of todos) {  //*

        const card = document.createElement('div');   //mi creo un div chiamato card
        card.classList.add('to-do-card');

        //per creare una pallina di colore a fianco di titleSpan
        const colorAndTitleDiv = document.createElement('div');
        colorAndTitleDiv.classList.add('color-and-title');

        const colorDot = document.createElement('div');
        colorDot.classList.add('colored-dot');
        colorDot.style.backgroundColor = todo.color;

        colorAndTitleDiv.appendChild(colorDot);

        const titleSpan = document.createElement('span');
        titleSpan.appendChild(document.createTextNode(todo.title));
        titleSpan.style.textDecoration = todo.done ? 'line-through' : 'none';

        colorAndTitleDiv.appendChild(titleSpan);
        card.appendChild(colorAndTitleDiv);


        const actionsDiv = document.createElement('div');  //mi creo un div per i bottoni

        let completeActionIcon;   //stabilisco l'icona del bottone in base allo stato del to-do
        if (todo.done) {
            completeActionIcon = "↺"
        } else {
            completeActionIcon = "✓"
        }

        const completeBtn = document.createElement('button');
        completeBtn.appendChild(document.createTextNode(completeActionIcon));
        completeBtn.classList.add("action");

        completeBtn.addEventListener('click', () => {
            changeDoneStatus(todo.id, !todo.done)
                .then(_ => {

                    todo.done = !todo.done;
                    displayToDos(todos);

                })
        })

        actionsDiv.appendChild(completeBtn);


        const detailLink = document.createElement('a');
        detailLink.appendChild(document.createTextNode("🠊"));
        detailLink.classList.add("action");
        detailLink.href = './detail/detail.html?todoId=' + todo.id;

        actionsDiv.appendChild(detailLink);
        card.appendChild(actionsDiv);
        toDosContainer.appendChild(card);

    }

}

function orderByTitle() {
    todos.sort((t1, t2) => t1.title.localeCompare(t2.title));
    displayToDos(todos);
}

function compareDates(t1, t2) {
    const date1 = t1.creationDate;
    const date2 = t2.creationDate;
    const dateObj1 = new Date(date1);
    const dateObj2 = new Date(date2);
    const time1 = dateObj1.getTime();
    const time2 = dateObj2.getTime();
    return time2 - time1;
}

function orderByCreationDate() {
    todos.sort(compareDates);
    displayToDos(todos);
}

document.getElementById("sort-title-btn")
    .addEventListener('click', orderByTitle);

document.getElementById("sort-creation-btn")
    .addEventListener('click', orderByCreationDate);

let todos = []

getAllToDos().then(results => {
    todos = results;
    displayToDos(todos)
})



//////////////////////////////////////////////////////////////////////////////////////////////

//TASK per domani (16.11.2025):
//1)Mettere le altre voci dentro del main
//2)aggiungere due tasti nella home (lista di To Do)
// - mette in ordine alfabetico
// - mette in ordine dal più nuovo al più vecchio in base alla creationDate


//mettere sotto il titolo, quanti giorni mancano alla scadenza:
//differenza data oggi e quella di scadenza (enDate)
//prima creo la funzione daysLeft, poi la chiamo dentro displayToDos() e creo un nuovo elemento per mostrarla


//TASK:
//1)PERSONALIZZARE LA TO DO LIST
//2)AGGIUNGERE UN BOTTONE DELETE NELLA PAGINA DI DETTAGLIO
//per eliminare il to-do selezionato dal database e tornare alla pagina principale
//per fare ciò, devo creare una nuova funzione in Delete.js che elimina un to-do dal database
//Delete.js sarà un file condiviso tra le due pagine (index.html e detail.html)
