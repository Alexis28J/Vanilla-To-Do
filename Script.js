
//Funzione per mostrare i to-dos nella pagina principale (lista di to-dos)
function displayToDos(todos) {

    const toDosContainer = document.getElementById('to-dos-container');
    toDosContainer.innerHTML = '';  //pulisco la pagina ogni giro

    for (const todo of todos) {  //a differenza di displayToDo(), qui creo gli elementi in un ciclo for perché sono più di uno
        const card = document.createElement('div');   //mi creo un div chiamato card
        card.classList.add('to-do-card');

        const titleSpan = document.createElement('span');
        titleSpan.appendChild(document.createTextNode(todo.title));

            //per creare una pallina di colore a fianco di titleSpan
            const colorCircle = document.createElement('div'); 
            colorCircle.style.display = 'inline-block';  //inline-block mi permette di mettere il div e il testo nella stessa riga
            colorCircle.style.borderRadius = '50%';
            colorCircle.style.width = '10px';
            colorCircle.style.height = '10px';
            colorCircle.style.marginLeft = '5px';
            
            colorCircle.style.backgroundColor = todo.color;
            titleSpan.appendChild(colorCircle);
        

            //titleSpan.style.backgroundColor = todo.color; //se voglio colorare lo sfondo del titolo al colore del to-do

        //titleSpan.style.textDecoration = 'line-through';  //Per mettere il testo barrato
        //Ma per mettere il testo barrato se il to-do è completato devo farlo qui, dentro displayToDos(), perché qui creo l'elemento titleSpan
        if (todo.done) {         //Se todo è "completo" allora ...
            titleSpan.style.textDecoration = 'line-through';     //Mette il testo barrato
        }

        card.appendChild(titleSpan);

        const days = document.createElement('span');
        days.appendChild(document.createTextNode(`Scade tra ${daysLeft(todo.endDate)} giorni`));
        card.appendChild(days);


        toDosContainer.appendChild(card);

        const detailBtn = document.createElement('button');
        detailBtn.appendChild(document.createTextNode('🠆'));      //🠆: carattere unicode (testo con effetto)
        //append e appendChild sono simili, ma appendChild accetta solo nodi, mentre append accetta anche stringhe
        detailBtn.classList.add('detail-btn');

        detailBtn.addEventListener('click', () => {  //()=> {}) è una funzione freccia (arrow function) 
            window.location.assign('./Detail.html?todoId=' + todo.id)
        });
        //quando clicco sul bottone vado alla pagina Detail.html
        //window si riferisce alla finestra del browser //location è un oggetto che rappresenta l'URL della pagina corrente
        //assign è un metodo che carica un nuovo documento
        //?todoId= è un parametro che passo alla pagina Detail.html per identificare il to-do selezionato

        card.appendChild(detailBtn);

        //Se invece di un botone, voglio mettere un link:
        //Vedi repository del prof.  ---  detailLink

        toDosContainer.appendChild(card);

        // const alphabeticalBtn = document.getElementById('alphabetical-btn');   //Io l'ho fatto così
        // alphabeticalBtn.addEventListener('click', () => {
        //     displayToDos ( todos.sort((a, b) => a.title.localeCompare(b.title)) );
        // });
        //il metodo sort() ordina gli elementi di un array in loco (e modifica l'array originale) e restituisce l'array ordinato
        //e accetta una funzione di confronto come argomento
        //la funzione di confronto prende due argomenti (a e b) e restituisce un numero
        //se il numero è negativo, a viene prima di b
        //se il numero è positivo, b viene prima di a
        //se il numero è zero, l'ordine di a e b non cambia
        //localeCompare() confronta due stringhe in base all'ordine alfabetico
        //qui ordino l'array todos in base al titolo (title)


        // const creationDateBtn = document.getElementById('creation-date-btn');      //Io l'ho fatto così
        // creationDateBtn.addEventListener('click', () => {
        //     displayToDos( todos.sort((a, b) => new Date(b.creationDate) - new Date(a.creationDate)) );
        //     //new Date(b.creationsDate) = 1624821200000  (esempio di data in millisecondi)
        //     //new Date(a.creationsDate) = 1619821200000
        //     //1624821200000 - 1619821200000 = 5000000 > 0 quindi b viene prima di a
        // });

        //JavaScript ha l'oggetto integrato Date che memorizza la data e l'ora e fornisce metodi per gestirle. 
        //(Esso memorizza la data e l’ora e fornisce dei metodi utili per il trattamento di queste.)
        //new Date() converte una stringa in un oggetto Data per poter fare operazioni di confronto
        //un oggetto Data è rappresentato come il numero di millisecondi trascorsi dal 1 gennaio 1970 00:00:00 UTC che è l'anno zero per i computer
        //1 gennaio 1970 è la data di riferimento per il calcolo del tempo nei computer (epoch time). L'anno in cui è stato introdotto UNIX.
    }

}

//getAllToDos().then(results => displayToDos(results));  
//chiamo la funzione getAllToDos() che mi restituisce una promessa
//quando la promessa viene risolta, chiamo la funzione displayToDos() passando i risultati come argomento

getAllToDos().then(results => {
    todos = results;
    displayToDos(todos)
});



//////////////////////////////////////////////////////////////////////////////////////////////
//TASK per domani (16.11.2025):  
//1)Mettere le altre voci dentro del main
//2)aggiungere due tasti nella home (lista di To Do)
// - mette in ordine alfabetico
// - mette in ordine dal più nuovo al più vecchio in base alla creationDate

//Fatto dal prof. -> Forma corretta (fuori dal ciclo for), se no ordina solo l'ultimo elemento creato
//Dentro il ciclo for non va bene perché ogni volta che creo una card, riassegno l'evento ai bottoni

function orderByTitle() {
    //console.log('pippo');
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
    //console.log('pluto');
    todos.sort(compareDates);
    displayToDos(todos);
}

//mettere sotto il titolo, quanti giorni mancano alla scadenza: 
//differenza data oggi e quella di scadenza (enDate)
//prima creo la funzione daysLeft, poi la chiamo dentro displayToDos() e creo un nuovo elemento per mostrarla   



function daysLeft (dateISO){
    const today = new Date();      //lo converto in milisecondi
    const endDate = new Date(dateISO);     //lo converto in milisecondi
    const endDaysLeft = endDate - today; //faccio la differenza
    return Math.floor(endDaysLeft / (360 * 60 * 60 * 24));

}


//TASK:
//1)PERSONALIZZARE LA TO DO LIST
//2)AGGIUNGERE UN BOTTONE DELETE NELLA PAGINA DI DETTAGLIO
