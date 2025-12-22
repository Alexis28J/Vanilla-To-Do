Lezione di Martedì 16 dicembre 2025

- https://mockapi.io/   ---  loggarsi con Github

Una Mock API serve a simulare il comportamento di un'API reale (back-end) che non è ancora pronta o disponibile, permettendo agli sviluppatori front-end e di testare di procedere senza blocchi, simulare scenari di errore, integrare servizi di terze parti in modo controllato, e mantenere la privacy simulando dati sensibili, velocizzando lo sviluppo e il testing senza dipendere dal server di produzione.

- Un'API (Application Programming Interface) è un insieme di regole, protocolli e strumenti che permette a diversi software e applicazioni di comunicare tra loro, scambiarsi dati e accedere a funzionalità, agendo come un "contratto" o "intermediario" che definisce come un'applicazione può chiedere e ricevere servizi da un'altra. Semplifica lo sviluppo, consente integrazioni (come usare Google Maps su un'altra app) e rende possibile l'interazione tra servizi diversi, fondamentale per il funzionamento di molti siti e app moderni. 

- https://blank.page/  (opzionale)  ---  A simple text editor designed for creative writing

- https://www.compart.com/en/unicode/category/So   ---  caratteri unicode

- https://github.com/mockapi-io/docs/wiki/Quick-start-guide - METODI (tra cui DELETE). Il prof. ha usato questo metodo per fare il task DELETE.

-
onclick

    un singolo listener

    può facilmente controllare la sua presenza

    può essere facilmente rimosso con l'accesso solo all'elemento (assegnare la proprietà a null)

    può essere impostato tramite HTML con attributo

    ascolta sempre gli eventi quando fa bubbling

addEventListener()

    supporta più listener

    nessun modo per controllare se i listener esistono

    per rimuovere è necessario l'accesso all'elemento, alla funzione listener originale e potenzialmente a un flag useCapture (options.capture)

    ...anche se supporta la rimozione con AbortControllers

    non riflesso in HTML

    supporta l'ascolto degli eventi quando si cattura o si fa bubbling

    supporta altre opzioni come passive e once

Come ha detto albedoa, il supporto per più listener è ciò che conferisce davvero ad addEventListener il vantaggio. Tuttavia, per le cose veloci e sporche, la variazione onclick può essere utile. 