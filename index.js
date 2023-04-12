// Cos'è Typescript?

/*
TypeScript è un linguaggio di programmazione basato su JavaScript che offre funzionalità 
di tipizzazione statica e di programmazione orientata agli oggetti. Ciò consente di individuare 
gli errori di tipo a tempo di compilazione e rende il codice più sicuro e facile da mantenere 
in progetti di grandi dimensioni.
*/

// A cosa serve?

/*
TypeScript è utile per migliorare la sicurezza, la manutenibilità e la scalabilità del codice JavaScript
in progetti di grandi dimensioni.
*/

// Che problema risolve?

/*
Risolve il problema della mancanza di controllo dei tipi in JavaScript, 
fornendo un sistema di tipizzazione statica opzionale che individua gli errori di tipo a tempo di compilazione. 
Ciò migliora la qualità e la stabilità del software.
*/

// Diferenze mentre Js e Ts

/*
Tipizzazione: JS è un linguaggio dinamicamente tipizzato, il che significa che i tipi vengono assegnati alle 
variabili a runtime, mentre TS è un linguaggio staticamente tipizzato, il che significa che i tipi vengono assegnati 
alle variabili a compile-time.

Errori: TS è staticamente tipizzato, rileva gli errori di tipo durante la compilazione, il che consente agli 
sviluppatori di individuare e correggere gli errori prima dell'esecuzione del codice. In JS, gli errori di tipo 
possono essere rilevati solo a runtime.

Struttura: TS consente agli sviluppatori di definire tipi di dati personalizzati, mentre JS non lo fa. 
Ciò significa che TS ha una struttura più forte rispetto a JS.

Compilazione: TS richiede una fase di compilazione che converte il codice TS in codice JavaScript, 
mentre JS non richiede una fase di compilazione.

Compatibilità: Poiché TS viene compilato in JS, il codice TS può essere eseguito ovunque venga eseguito JS.
Inoltre, la maggior parte delle librerie e dei framework JS sono compatibili con TS.
*/

// Il compilatore TS

// Perché è necessario?

/*
Il compilatore TypeScript è necessario perché TypeScript è un linguaggio di programmazione che estende JavaScript, 
aggiungendo funzionalità extra e non viene letto dal browser.
*/

// Como si usa?

/*
Utilizzando la seguente riga di comando nel terminale:

'tsc il-mio-file.ts'
*/

// Type inference?

/*
Type inference in TypeScript è il processo in cui il compilatore TypeScript deduce automaticamente 
il tipo di una variabile in base al valore assegnato ad essa, invece di definire esplicitamente il tipo di una variabile 
utilizzando la sintassi del tipo, come in altre lingue di programmazione, in TypeScript è possibile omettere la 
dichiarazione del tipo di una variabile e lasciare che il compilatore deduca il tipo dal valore assegnato ad essa.

Ad esempio, se una variabile viene inizializzata con una stringa, il compilatore TypeScript può inferire 
che il tipo della variabile è una stringa e così via.

La type inference in TypeScript rende il linguaggio più facile e veloce da usare, in quanto riduce la quantità
di codice che deve essere scritta e aiuta a evitare errori di tipizzazione.
*/

// Tipo 'Any'

/*
In TypeScript, il tipo any viene utilizzato per rappresentare un valore dinamico, 
ovvero un valore che può essere di qualsiasi tipo.

let myVar:any;

myVar = 42;
myVar = 'Joao';
myVar = true;

Puoi fare qualsiasi tipo di operazione.
*/

// Tipo Union

/*
Il tipo union è una forma di rappresentare un tipo che può essere di due o più tipi diversi.
Il tipo union è definito utilizzando l'operatore '|' tra i tipi che si desidera unire.

let myVar: string | number;

myVar = 42;
myVar = 'Joao';
*/

// Tipo Tuple

/*
il tipo 'tupla' è un modo per rappresentare un tipo di array con un numero fisso di elementi e 
tipi specifici per ogni posizione dell'array.

Per definire un tipo di tupla, si usano le parentesi quadre e si specifica il tipo di ogni 
elemento dell'array nell'ordine in cui appaiono.

let myArr: [number, string, boolean];

myArr = [30, 'Joao', true];
*/

// Le Interfaces in TS

/*
Le interfacce vengono utilizzate per definire contratti per gli oggetti, specificando le proprietà 
e i metodi che un oggetto deve avere per essere considerato di un certo tipo.

esempi:

interface Persona {
  nome: string;
  cognome: string;
  eta: number;
}

const persona1: Persona = {
  nome: "Mario",
  cognome: "Rossi",
  eta: 30
};

const persona2: Persona = {
  nome: "Enzo",
  cognome: "Ferrari",
  eta: 92
};
*/
