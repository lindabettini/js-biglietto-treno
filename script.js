console.log('JS OK');

/* 
1.Chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
2.Calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km).
3/4. Va applicato uno sconto del 20% per i minorenni
3/4. Va applicato uno sconto del 40% per gli over 65.
5.L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). */

// Chiedere all'utente quanti km vuole percorrere
const kmRun = parseInt(prompt('Quanti chilometri vuoi percorrere?')); 
console.log(kmRun);

// Chiedere et all'utente 
const passengerAge = parseInt(prompt('Quanti anni hai?')); 
console.log(passengerAge);

// Calcolare il prezzo totale del viaggio
let totalPrice = kmRun * 0.21;

if (passengerAge < 18){    
    let finalPrice: function calculateDiscount(totalPrice, percentage); {        
        let discountValue = (totalPrice / 100) * 20;
        let finalPrice = totalPrice - discountValue;
        
        return finalPrice.toFixed(2);
    } 
}


