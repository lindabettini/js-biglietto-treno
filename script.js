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

// Chiedere eta' all'utente 
const passengerAge = parseInt(prompt('Quanti anni hai?')); 

// Calcolare il prezzo totale del viaggio
let totalPrice = kmRun * 0.21;

// Calcolare eventuali sconti del viaggio
let discountValue = 0;

if (passengerAge < 18){              
    discountValue = (totalPrice / 100) * 20;
    totalPrice = totalPrice - discountValue;
}   else if (passengerAge > 65){              
    discountValue = (totalPrice / 100) * 40;
    totalPrice = totalPrice - discountValue;
}

// Arrotondare prezzo finale 
let finalPrice = totalPrice.toFixed(2);

// Recupero elementi da sampare in pagina
const kmElement = document.getElementById('km');
const ageElement = document.getElementById('age');
const priceElement = document.getElementById('price');

// Stampo in pagina
kmElement.innerHTML = `Chilometri biglietto: ${kmRun}`;
ageElement.innerHTML = `Et&agrave; passeggero: ${passengerAge}`;
priceElement.innerHTML = `Prezzo: € ${finalPrice}`;
