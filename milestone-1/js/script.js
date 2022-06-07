// Per i multipli di 3 stampi Fizz al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// Stampare in console.

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
    console.log(multipli);
}
