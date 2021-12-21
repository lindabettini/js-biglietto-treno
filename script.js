console.log('JS OK');

/* 
1.Chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
2.Calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km).
3/4. Va applicato uno sconto del 20% per i minorenni
3/4. Va applicato uno sconto del 40% per gli over 65.
5.L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). */

//1. Chiedere all'utente quanti km vuole percorrere
const kmRun = parseInt(prompt('Quanti chilometri vuoi percorrere?')); 
console.log(kmRun);

//2. Calcolare il prezzo totale del viaggio
const fullPrice = kmRun * 0.21
console.log('il costo totale è di: €', 'fullPrice')