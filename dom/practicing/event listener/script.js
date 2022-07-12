function criarProduto(nome,valor,liquidacao,distribuidor) {
    item = {
        nome: nome,
        valor: valor,
        liquidacao: liquidacao,
        distribuidor: distribuidor
    }
    return item
}
const ul = document.querySelector('ul');
ul.style.listStyleType = 'none'
let body = document.querySelector('body')
function listarProduto(produtos) {
    for(let i = 0; i < produtos.length; i++) {

        let produto = document.createElement('li')
        let nome = document.createElement('span')
        let valor = document.createElement('span')
        let liquidacao = document.createElement('span')
        let distribuidor = document.createElement('a')
        

        liquidacao.addEventListener('click', function () {
            if(produtos[i].liquidacao === true) {
                let alertaPromocional = document.createElement('p')
                body.append(alertaPromocional)
                alertaPromocional.innerText = `HOJE POR APENAS: R$${produtos[i].valor * 0.7}`
            }
        })

        nome.innerText = produtos[i].nome;
        valor.innerText = produtos[i].valor
        liquidacao.innerText = produtos[i].liquidacao
        distribuidor.innerText = produtos[i].distribuidor

        produto.append(nome, valor, liquidacao, distribuidor);
        ul.appendChild(produto);
    }
}












let produto = [{
    nome: 'Notebook',
    valor: 3000.00,
    liquidacao: true,
    distribuidor: 'lojadakenzie.com.br'
  }]
listarProduto(produto);