// Per ogni numero, data una ul nel DOM, aggiungete un elemento html li 
// con il numero o la stringa corretta (seguendo le regole della Milestone 1).

// creazone costante di ul
const lista = document.querySelector('.list');

for(let i = 1; i <= 100; i++) {
    let multipli = i;
    if (i % 3 === 0) {
        multipli = 'Fizz';
    } else if (i % 5 === 0) {
        multipli = 'Buzz';
    } 
    if ( (i % 3 === 0) && (i % 5 === 0) ) {
        multipli = 'Fizz' + 'Buzz';
    }

    // creazione li
    const newLi = `<li class"list-item">${multipli}</li>`;

    // concatenazione con ul
    lista.innerHTML += newLi;
}