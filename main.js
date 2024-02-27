//console.log('test');

console.log('SNACK PALINDROMA');

// Chiedere all’utente di inserire una parola 
let userWord = prompt('scrivi una parola')
console.log(userWord);
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



console.log('SNACK PARI E DISPARI');



