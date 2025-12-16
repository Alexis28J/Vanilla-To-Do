
function displayToDos(todos) {

    const toDosContainer = document.getElementById('to-dos-container');
    toDosContainer.innerHTML = '';

    for (const todo of todos) {
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

        detailBtn.addEventListener('click', () => {
            window.location.assign('./Detail.html?todoId=' + todo.id);   //quando clicco sul bottone vado alla pagina Detail.html
            //window si riferisce alla finestra del browser //location è un oggetto che rappresenta l'URL della pagina corrente
            //assign è un metodo che carica un nuovo documento
            //?todoId= è un parametro che passo alla pagina Detail.html per identificare il to-do selezionato
        })

        card.appendChild(detailBtn);

        //Se invece di un botone, voglio mettere un link:

        //Vedi repository del prof.  ---  detailLink

        

        toDosContainer.appendChild(card);
    }

}

getAllToDos().then(results => displayToDos(results));