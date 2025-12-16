
function displayToDos(todos) {

    const toDosContainer = document.getElementById('to-dos-container');
    toDosContainer.innerHTML = '';

    for (const todo of todos) {
        const card = document.createElement('div');   //mi creo un div chiamato card
        card.classList.add('to-do-card');

        const descriptionSpan = document.createElement('span');
        descriptionSpan.appendChild(document.createTextNode(todo.description));

        card.appendChild(descriptionSpan);

        toDosContainer.appendChild(card);

        const detailBtn = document.createElement('button');
        detailBtn.appendChild(document.createTextNode('➳'));      //➳: carattere unicode (testo con effetto)
        //append e appendChild sono simili, ma appendChild accetta solo nodi, mentre append accetta anche stringhe
        detailBtn.classList.add('detail-btn');

        card.appendChild(detailBtn);

        toDosContainer.appendChild(card);
    }

}

getAllToDos().then(results => displayToDos(results));