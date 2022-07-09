
const listOfWords = ['i', 'like', 'programming'];
const phrase = 'Chocolate makes me happy';
const phraseEquals = 'lol, i mean lol, what else could i do, do you dance? LOL'
const listOfNumbers = [1,2,3,4,5,6,7,8,9,1,20,2,4,5];

// BIGGEST NUMBER IN AN ARRAY
const sumOfNumbers = (arrayOfNumbers) => {
    let biggestNumber = arrayOfNumbers[0];

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const number = arrayOfNumbers[i];
        if(number > biggestNumber) {
            biggestNumber = number;
        }
    }
    return biggestNumber;
}

//FREQUENCY OF A LETTER
function frequencyOfALetter (phrase) {
    let frequency = {};
    for (let letter = 0; letter < phrase.length; letter++) {
        if(phrase[letter] in frequency) {
            frequency[phrase[letter]] += 1;
        }   else {
            frequency[phrase[letter]] = 1;
        }
    }
    return frequency
}
// WORD FREQUENCY
const wordFrequency = (phrase) => {
    const arrayOfWords = phrase.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').toLowerCase().split(' ');
    return frequencyOfALetter(arrayOfWords);
}