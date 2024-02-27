//console.log('test');


//console.log('SNACK PALINDROMA');

// Chiedere all’utente di inserire una parola 
//let userWord = prompt('scrivi una parola')
//console.log(userWord);
/*
// divido la parola scritta dall'user 
let wordSplit = userWord.split('')
console.log(wordSplit);

// inverto l'rodine della parola divisa
let word = wordSplit.reverse()
console.log(wordSplit);

// unisco la parola invertita
word = wordSplit.join('')
console.log(word);

// verifivo se la parola invertita è uguale alla parola scritta dall'user
if (userWord == word) {
    
    console.log('your word is palindrome');

} else{
    console.log('your word isnt palindrome');
}
*/

// Creare una funzione per capire se la parola inserita è palindroma

/*
function reversWord(userWord) {

    let wordSplit = userWord.split('')
    console.log(wordSplit);

    let word = wordSplit.reverse()
    console.log(wordSplit);

    word = wordSplit.join('')
    console.log(word);

    return word;

} 

console.log(reversWord(userWord));

if (userWord == reversWord(userWord)) {
    
    console.log('your word is palindrome');

} else{
    console.log('your word is not palindrome');
}
*/


console.log('SNACK PARI E DISPARI');


// sceglie un numero tra 1 e 5
/**
 * richiedo integer number
 * integer Number da verificare se inclusa in array
 * return a valid userNumber
 * 
 */

function askUserNumber() {

    let possibleNumb = [1, 2, 3, 4, 5];

    let userNumber = Number(prompt('scrivi un numero da 1 a 5'));
    console.log(userNumber);

    for (let i = 0; i < possibleNumb.length; i++) {

        if (!possibleNumb.includes(userNumber)) {
            userNumber = Number(prompt('ATTENZIONE, scrivi un numero da 1 a 5'));
            console.log(userNumber);

        } else {
            break;
        }

    }

    return userNumber;
}

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
/**
     * Ogni volta che chiamo la funzione mi genera e restituisce un numero casuale quindi do alla funzione una costante in addEventListener
     * return a random number compreso tra 1 e 5 
     */
function createNumbPc() {
    let pcNumber = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    return pcNumber;

}


// Sommiamo i due numeri

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

// Dichiariamo chi ha vinto.
/**
 * 
 * integer number Numero da verifacare
 * string odd_or_even Condizione da verifacare 'pari', 'dispari'
 * 
 * return boolean True se le condizioni sono vere, false se non si sono verificate
 */
function oddEven(number, odd_or_even) {

    if (odd_or_even == 'pari' && number % 2 == 0) {
        return true;
    } else if (odd_or_even == 'dispari' && number % 2 != 0) {
        return true;
    } else {
        return false;
    }

}

// L’utente sceglie pari o dispari
document.getElementById("pari").addEventListener("click", function () {

    // sceglie un numero tra 1 e 5
    let userNumber = askUserNumber();

    // Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    let pcNumber = createNumbPc();
    console.log(pcNumber);


    // Sommiamo i due numeri

    // Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

    // Dichiariamo chi ha vinto.
    if (oddEven(userNumber + pcNumber, 'pari')) {
        console.log('you win!');
    } else {
        console.log('sorry, you lose');
    }




});

// L’utente sceglie pari o dispari
document.getElementById("dispari").addEventListener("click", function () {

    // sceglie un numero tra 1 e 5
    let userNumber = askUserNumber();

    // Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    let pcNumber = createNumbPc();
    console.log(pcNumber);


    // Sommiamo i due numeri

    // Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

    // Dichiariamo chi ha vinto.
    if (oddEven(userNumber + pcNumber, 'dispari')) {
        console.log('you win!');
    } else {
        console.log('sorry, you lose');
    }


})














