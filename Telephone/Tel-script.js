const baseUrl = "https://694115cf686bc3ca81658f6e.mockapi.io/api/v1/Todos";

const list = document.getElementById("contactList");
const form = document.getElementById("contactForm");
const search = document.getElementById("search");

let contacts = [];    // Memorizza i contatti caricati
let editingId = null;   //*

// ----------------------
// FETCH iniziale
// ----------------------
async function loadContacts() {  //* 
  const res = await fetch(baseUrl);  //* aspetta la risposta dal server mockapi
  contacts = await res.json();  //* estrai i dati JSON dalla risposta e lo memorizza in contacts come array di oggetti
  renderContacts(contacts);  //* vedi più sotto
}

loadContacts();

// ----------------------
// RENDER LISTA
// ----------------------
function renderContacts(data) {
  list.innerHTML = "";
  data.forEach(c => {    //forEach itera su ogni contatto nell'array data
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${c.name}</strong> - ${c.phone} - ${c.email || ""}
      <button onclick="editContact('${c.id}')">Modifica</button>
      <button onclick="deleteContact('${c.id}')">Elimina</button>
    `;
    list.appendChild(li);
  });
}

// ----------------------
// AGGIUNTA / MODIFICA
// ----------------------
form.addEventListener("submit", async (e) => {   //* 
  e.preventDefault();  //*

  const newContact = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value
  };

  if (editingId) {
    await fetch(`${baseUrl}/${editingId}`, {   //* costruisce l'URL per il contatto specifico
      method: "PUT",    //* con il metodo PUT indica che si sta aggiornando un contatto esistente
      headers: { "Content-Type": "application/json" },  //* specifica che il corpo della richiesta è in formato JSON
      body: JSON.stringify(newContact)   //* converte l'oggetto newContact in una stringa JSON da inviare al server
    });
    editingId = null;    //* resetta l'ID di modifica dopo l'aggiornamento
  } else {
    await fetch(baseUrl, {     //* invia una richiesta POST al server mockapi per creare un nuovo contatto */
      method: "POST",    //* con il metodo POST indica che si sta creando un nuovo contatto
      headers: { "Content-Type": "application/json" }, //* specifica che il corpo della richiesta è in formato JSON
      body: JSON.stringify(newContact)  //* converte l'oggetto newContact in una stringa JSON da inviare al server
    });
  }

  form.reset();   //* resetta il modulo dopo l'invio
  loadContacts(); //* ricarica la lista dei contatti per riflettere le modifiche
});

// ----------------------
// MODIFICA
// ----------------------
window.editContact = function(id) {
  const c = contacts.find(x => x.id === id);
  form.name.value = c.name;
  form.phone.value = c.phone;
  form.email.value = c.email;
  editingId = id;
};

// ----------------------
// ELIMINA
// ----------------------
window.deleteContact = async function(id) {
  await fetch(`${baseUrl}/${id}`, { method: "DELETE" });
  loadContacts();
};

// ----------------------
// RICERCA
// ----------------------
search.addEventListener("input", () => {
  const term = search.value.toLowerCase();
  const filtered = contacts.filter(c =>
    c.name.toLowerCase().includes(term) ||
    c.phone.includes(term)
  );
  renderContacts(filtered);
});

// ----------------------
// ORDINAMENTO
// ----------------------
document.getElementById("sortAZ").onclick = () => {
  const sorted = [...contacts].sort((a, b) => a.name.localeCompare(b.name));  //*[...contacts] crea una copia dell'array contacts per evitare di modificare l'array originale
  renderContacts(sorted);
};

document.getElementById("sortZA").onclick = () => {
  const sorted = [...contacts].sort((a, b) => b.name.localeCompare(a.name));
  renderContacts(sorted);
};