//Split
const mySplitFunction = (string, separator) => {
    let stringAuxiliar = '';
    let array = [];

    for(let i = 0; i < string.length; i++) {
        if(string[i] !== separator) {
            stringAuxiliar += string[i]
        }   else {
            array.push(stringAuxiliar)
            stringAuxiliar = ''
        }      
    }

    return array;
}

//Push
const myPushFunction = (array, element) => {
    array[array.length] = element
    return array.length;
}

//Join
function myJoinFunction (array, unifier) {
    let output = '';

    for (let i = 0; i < array.length; i++) {
        output += `${array[i]}${unifier}`;
    }

    return output;
}

//Sort
function mySortFunction (array) {
    let aux = 0;

    for(let i = 0; i < array.length; i++) {
        for(let j = i + 1; j < array.length; j++) {
            if(array[i] > array[j]) {
                aux = array[i];
                array[i] = array[j]
                array[j] = aux
            }
        }
    }
    return array;
}