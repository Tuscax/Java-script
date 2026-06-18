//funções
function nomedafuncao () {
    //bloco de execução
}
const num1 = Number(prompt("Digite um número")) 
const num2 = Number(prompt("Agora o segundo número"))
//função sem parâmetro
function soma () { 
    if (typeof(num1) !== "number" || isNaN(num2) ) {
        alert(`digite apenas números pfvr né`)
        return
    }
    else{
    alert(`resultado da soma é ${num1 + num2}`) 
    // alert("Parabens você sabe digitar números")
    }
}
//Execução da função
soma()

//função com parametros e retorno

function subs() {
    console.log("Entrei na função de subtra");
    return  `O resultado da  subtração é igual a ${num1 - num2}`
    }
    console.log(subs());

function multi (numero1, numero2 ) {
    return `O resultado da multiplicação é igual a ${numero1 * numero2}`
}
console.log(multi(num1, num2))
console.log(multi(100, 30 ))

//arrow function (Função de seta) - Função anônima, função reduzida

const divisao = (banana, cachorro) => {
    return `O resultado da divisão é igual a ${(banana / cachorro).toFixed(2)}`
}
console.log(divisao(num1, num2))

//hoisting - function pode ser lido mesmo que a execução seja feita antes da declaração
//arrow function não aceita a hoisting
console.log(hoisting())
function hoisting() {
    return `O resultado da soma é igual a ${num1+num2}`
}

//função de callback

function saudacao() {
    console.log("Olá mundo")
}
function falar() {
    saudacao() //callback
}
falar()