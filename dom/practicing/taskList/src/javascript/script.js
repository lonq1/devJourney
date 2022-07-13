
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
        if(tasks[i].tipo === 'urgente') {
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

let todasTarefas = document.querySelector('.lista-tarefas')

const creatingLists = (arrayOfTasks) => {
    const listOrdered = orderingTasks(arrayOfTasks);

    for(i = 0; i < listOrdered.length; i++) {
        let li = document.createElement('li');
        let titulo = document.createElement('span');
        let lixeira = document.createElement('img')
        titulo.innerText = listOrdered[i];
        lixeira.src = './src/assets/lixo.png'

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
let select = document.querySelector('select')
let option = document.getElementsByTagName('option')

let input = document.querySelector('input')
let btnAdd = document.createElement('button')
let addSection = document.querySelector('.add-tarefa')

btnAdd.innerText = 'Adicionar Tarefa'
input.placeholder = 'Digite o título da tarefa'
addSection.append(btnAdd)

function createTask () {
    let item = {}
    item.titulo = input.value
    item.tipo = ''
    addTask(item.titulo, item.tipo)
    todasTarefas.innerHTML = ''
    creatingLists(tasks)
}
btnAdd.addEventListener('click', createTask)
