// creare quadrati numerati da 0 a 100 e per ogni multiplo di 3, scrivere fizz nel quadrato, per ogni multiplo di 5 scrivere buzz e per i multipli di 3 e 5 scrivere fizzbuzz

let eleSquares = document.querySelector(".squares");
let i;

for ( let i = 1; i <= 100; i++){
    
    if ( i % 3 == 0 ) {
        eleSquares.innerHTML += `<div class="sq">${"fizz"}</div>`
    }
     if (i % 5 == 0) {
        eleSquares.innerHTML += `<div class="sq">${"Buzz"}</div>`
    }
    // if ((i % 3 == 0) && (i % 5 == 0)) {
    //     eleSquares.innerHTML += `<div class="sq">${"FizzBuzz"}</div>`
    // }
    else{
        eleSquares.innerHTML +=  `<div class="sq">${i}</div>`
    }
        
    
}