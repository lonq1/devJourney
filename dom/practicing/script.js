// let paragrafo = document.createElement('p');
// paragrafo.innerText = 'kkkasdasdasdaskkk'

// document.querySelector('body').appendChild(paragrafo);

// const tagInput = document.createElement('input');
// tagInput.placeholder = 'Digite algo'

// const form = document.querySelector('form');
// form.appendChild(tagInput)


// const paragrafo = document.getElementById('meuParagrafo');

// const botao = document.getElementById('meuBotao');
// const outroBotao = document.getElementById('meuOutroBotao');

// botao.addEventListener('click', function(){
//     paragrafo.classList.remove('escondido');
// });

// outroBotao.addEventListener('click', function(){
//     paragrafo.classList.add('escondido');
// });

// const btn = document.querySelector('.changeColor');

// function random(number) {
//   return Math.floor(Math.random()*(number+1));
// }

// btn.addEventListener('click', function() {
//     const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//     document.body.style.backgroundColor = rndCol;
// })


//S4-03

// const main = document.getElementById('root')
// main.innerText = 'repetir';

// let span = document.createElement('span')
// span.innerText = 'kkkkkk'
// main.append(span)

// let element = document.getElementsByClassName("container")[0];
// let elementInformado = document.getElementsByClassName("infomacao")[0];

// const array = []
// array.push('aaaa')
// console.log(array)

//s7-06

//tarefa é um objeto que possui titulo(nome da tarefa) e tipo(urgente,prioritario,normal)
//se a tarefa é urgente tem que ser renderizada primeiro, seguindo hierarquia
//somente o nome da tarefa(titulo) será renderizado

let tasks = [
    {
      titulo: "Comprar comida para o gato",
      tipo: "Urgente"
    },
    {
      titulo: "Limpar o quarto",
      tipo: "urgente"
    },  
    {
      titulo: "Consertar Computador",
      tipo: "prioritário"
    },  
    {
      titulo: "Guardar dinheiro do lanche",
      tipo: "Urgente"
    },  
    {
      titulo: "Beber água",
      tipo: "prioritário"
    }    
  ]

function orderingTasks(tasks) {
    let output = [];

    for(let i = 0; i < tasks.length; i++) {
        if(tasks[i].tipo.toLowerCase() === 'urgente') {
            output.unshift(tasks[i].titulo) 
        }   else {
            output.push(tasks[i].titulo)
        }
    }
    return output;
}  



function addTask (titulo, tipo) {
    item = {
        titulo: titulo,
        tipo: tipo
    }
     tasks.push(item)
}
addTask('qualquerCoisa','prioritario')


let todasTarefas = document.querySelector('.lista-tarefas')

const creatingLists = (arrayOfTasks) => {
    const listOrdered = orderingTasks(arrayOfTasks);

    for(i = 0; i < listOrdered.length; i++) {
        let li = document.createElement('li');
        let titulo = document.createElement('span');
        let lixeira = document.createElement('img')
        titulo.innerText = listOrdered[i];
        lixeira.src = './lixo.png'

        li.append(titulo,lixeira)
        todasTarefas.append(li)     
    }
}
creatingLists(tasks)

const trashCan = todasTarefas.addEventListener('click', (event) => {
   
    if(event.target.tagName == 'IMG') {
        event.target.closest('li').remove()
    }
})
// let btnAdd = document.createElement('button')

// let form = document.querySelector('form')
// let input = document.createElement('input')
// input.placeholder = 'Digite o título da tarefa'
// form.append(input)
// let option = document.querySelectorAll('option')
// btnAdd.innerText = 'Adicionar Tarefa'
// form.append(btnAdd)
// form.addEventListener('click', (event) => {
//     if(event.target.tagName === 'BUTTON') {
        
//         tasks.push({
//             titulo: input.value,
//             tipo: option.value
//         })
        

//     }
// })