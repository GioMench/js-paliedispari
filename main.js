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

// L’utente sceglie pari o dispari
do {
    document.getElementById("pari").addEventListener("click", function numberType() {

        //let possibleNumb = [1, 2, 3, 4, 5];
        // e inserisce un numero da 1 a 5.
        let userNumber = Number(prompt('scrivi un numero da 1 a 5'));
        console.log(userNumber);

        /* for (let i = 0; i < possibleNumb.length; i++) {
             let listNumb = possibleNumb[i];
 
             if (userNumber !== listNumb) {
 
                 alert('ATTENZIONE, scrivi un numero da 1 a 5');
                 break;
             }
             else  {
 
                     let pcNumber = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
                     console.log(pcNumber);
 
                 }
                }*/

        // Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

        //let pcNumber = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
        

        function createNumbPc() {

            let pcNumber = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
            return pcNumber;
            
        }
        console.log(createNumbPc());

        let sum = (userNumber + createNumbPc());
        console.log(sum);




    });
} while (document.getElementById("dispari").addEventListener("click", function numberType() {

    let userNumber = prompt('scrivi un numero da 1 a 5')
    console.log(userNumber);
})
)












// Sommiamo i due numeri

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

// Dichiariamo chi ha vinto.

