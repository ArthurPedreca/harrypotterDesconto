var prompt = require('prompt-sync')();

function quantidadeLivros(qntd){ 
    qntd = prompt("quantos livros tu quer?")
    return qntd
}

function calcPreco(quantidade){
    let preco
    console.log(quantidade)
    quantidade >= 7 ? preco = 15 : preco = 22
    return preco
}

function Desconto(){
    qntd = quantidadeLivros()
    let valor = qntd * calcPreco(qntd) 
    return valor 
}
console.log(Desconto())

