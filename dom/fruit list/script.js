let products = ['Banana','Morango','Goiaba','Pêssego'];

function createElementItens (arrayOfFruits) {
    let ul = document.querySelector('.list-itens');
    let fruitList = [];
    
    for(let i = 0; i < arrayOfFruits.length; i++) {
        let fruitCard = document.createElement('li');
        fruitCard.innerText = arrayOfFruits[i];
        ul.appendChild(fruitCard);
    }
}

createElementItens(products);