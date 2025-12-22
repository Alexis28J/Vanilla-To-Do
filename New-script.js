// aspetta che la pagina sia caricata
document.addEventListener('DOMContentLoaded', () => {
  const saveBtn = document.getElementById('save-btn');

  saveBtn.addEventListener('click', () => {
    const title = document.getElementById('new-title').value;
    const description = document.getElementById('new-description').value;
    const date = document.getElementById('new-datetime').value;
    const color = document.getElementById('new-color').value;
    const done = document.querySelector('input[name="done"]:checked')?.value === 'true';

    const newTodo = {
      title: title,
      description: description,
      createdAt: new Date().toISOString(), //  DATA AUTOMATICA
      endDate: date,
      color: color,
      completed: done
      
    };

    console.log(newTodo);
    

    createTodo(newTodo)
      .then(result => {
        console.log('Todo creata:', result);
        alert('Todo salvata!');
      })
      .catch(error => {
        console.error('Errore:', error);
      });
  });
});

//CORREGGERE: SI CREA DOPPIO DATA DI CREAZIONE E DI SCADENZA NEL MOCKAPI
