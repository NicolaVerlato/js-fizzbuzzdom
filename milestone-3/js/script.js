// Per ogni numero, dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
// Applica uno stile differente a seconda del valore dell'indice per i multipli di 3,
// per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5 (seguendo le regole della Milestone 1).

// creazone costante del container
const squareContainer = document.querySelector('.square-container');

for(let i = 1; i <= 100; i++) {
    let multipli = i;
    let color;
     
    if ( (i % 3 === 0) && (i % 5 === 0) ) {
        multipli = 'Fizz' + 'Buzz';
        color = 'red';
    } else if (i % 3 === 0) {
        multipli = 'Fizz';
        color = 'green';
    } else if (i % 5 === 0) {
        multipli = 'Buzz';
        color = 'yellow';
    }

    // creazione square
    const square = `<div class="square ${color}">${multipli}</div>`;

    // concatenazione con container
    squareContainer.innerHTML += square;
}