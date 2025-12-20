// Recupera l'id del to-do dai parametri della URL
const params = new URLSearchParams(window.location.search);
const todoId = parseInt(params.get("todoId"));


//PASSO A PASSO
//window: è l’oggetto globale del browser, rappresenta la finestra
//location: rappresenta l’URL attuale della pagina.
//search: è la parte dell’URL che contiene la query string, cioè tutto ciò che sta dopo il ?.
//Esempio: se l’URL è detail.html?todoId=1&name=test  allora  window.location.search  restituisce "?todoId=1&name=test"
//Quindi window.location.search è una semplice stringa.

//URLSearchParams è una classe del browser che serve per lavorare comodamente con le query string. 
//Crei un oggetto che sa “leggere” e “spacchettare” quella query string in coppie chiave/valore.
//Nel codice stai dicendo: Prendi la query string dell’URL (es. "?todoId=1&name=test") e trasformala in un oggetto params da cui posso leggere i parametri.
//Da questo momento, params non è più una stringa, ma un oggetto con metodi utili, tra cui .get().

//params.get("todoId"): Il metodo .get("chiave") serve per ottenere il valore di un parametro specifico della query string.
//Se l'URL è: detail.html?todoId=1&name=test  allora:  params.get("todoId"); //"1"  params.get("name"); //"test"
//Attenzione: il risultato è SEMPRE una stringa. 

//parseInt(params.get("todoId")): parseInt() prende una stringa e prova a convertirla in numero intero. 
//Nel codice: new URLSearchParams("?todoId=1&name=test") se params.get("todoId") restituisce "1", allora parseInt("1") diventa il numero 1.

//const todoId = parseInt(params.get("todoId"));
//Ora mettiamo tutto insieme:
// - params.get("todoId") → prende dalla query string il valore associato a todoId → es. "1".
// - parseInt(...) → converte "1" nel numero 1.
// - const todoId = ... → salva questo numero nella costante todoId.
// Alla fine, se l’URL è: detail.html?todoId=1  allora:  todoId === 1    // true (numero)




function deleteTodo(id) {
    if (!confirm("Vuoi davvero eliminare questo to-do?")) {
        return;
    }

    // Recupera la lista dal localStorage
    let todos = JSON.parse(localStorage.getItem("todos")) || [];

    // Filtra via quello da eliminare
    todos = todos.filter(todo => todo.id !== id);

    // Salva la lista aggiornata
    localStorage.setItem("todos", JSON.stringify(todos));

    // Torna alla home
    window.location.href = "index.html";
}

// Aggiungo l'id del to-do alla finestra globale per poterlo usare nell'HTML

window.todoId = todoId; // Così posso usarlo in Detail.html nel button onclick



//PASSO A PASSO
//1. function deleteTodo(id) { ... }:  Stai definendo una funzione che riceve un parametro: l’ID del to‑do da eliminare.

//2. Conferma dell'utente: 
// if (!confirm("Vuoi davvero eliminare questo to-do?")) {
//     return;
// }
// - confirm() mostra una finestra con OK / Annulla.
// - Se l’utente clicca Annulla, confirm() restituisce false.
// - Il ! lo nega → quindi se l’utente annulla, la funzione si ferma con return.
// Serve per evitare eliminazioni accidentali.


//3. Recupero dei to‑do dal localStorage
// let todos = JSON.parse(localStorage.getItem("todos")) || [];
// - localStorage.getItem("todos") prende la lista salvata.
// - È una stringa JSON, quindi la converti in array con JSON.parse().
// - Se non esiste nulla, usi || [] per avere un array vuoto.


// 4. Filtrare via il to‑do da eliminare
// todos = todos.filter(todo => todo.id !== id);
// - .filter() crea un nuovo array.
// - Mantiene solo gli elementi per cui la condizione è vera.
// - La condizione è: todo.id !== id
// - cioè: tieni tutti i to‑do tranne quello con l’ID che voglio eliminare.
// È il cuore dell’eliminazione.


// 5. Salvare la lista aggiornata
// localStorage.setItem("todos", JSON.stringify(todos));
// - Converti l’array aggiornato in stringa JSON.
// - Lo risalvi nel localStorage.
// Ora il to‑do è davvero sparito.


// 6. Tornare alla pagina principale
// window.location.href = "index.html";
// - Cambia pagina.
// - Ricarica la lista aggiornata.



//window.todoId = todoId;
// Questa riga serve a rendere globale la variabile todoId.

// Perché?
// Perché se in HTML hai un bottone così:
// <button onclick="deleteTodo(todoId)">Elimina</button>
// il browser deve poter “vedere” la variabile todoId a livello globale.

// Se todoId fosse definita così:
// const todoId = 3;
// ma dentro un file JS o dentro una funzione, l’HTML non la vede.

// Assegnandola a window:
// window.todoId = todoId;
// la trasformi in:
// window.todoId → variabile globale
// todoId → accessibile dall’HTML

// È un trucco molto comune quando si usano onclick="" direttamente nell’HTML.

// In pratica, cosa succede?
// - La pagina legge la query string e ricava todoId.
// - Tu fai:
// window.todoId = todoId;
// - → ora todoId è globale.
// - Il bottone HTML può chiamare:
// <button onclick="deleteTodo(todoId)">Elimina</button>
// - La funzione riceve l’ID giusto e lo elimina dal localStorage.

