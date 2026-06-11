// eslint - é uma biblioteca que trabalha com regras (Estudo Extro <3), via instalação >:( 


// Tipos de dados
"string"
'String'
"Texto 'texto2 ' "

10 //Número  ou Number
12.5 //Número ou Number
NaN //-->Not a Number // Número Number

// Método de verificação de dado primitivo
typeof("30") //Resultado : String
typeof(30) // output : Number

//tipo boolean
true
false

// Undefined: Dado valido sóq sem valor definido
//null: NULO
 const nome = "Jose" 
 console.log(nome)

 //Const nome = "Tuscas"
//Error: não pode-se criar mais de uma constante com o mesmo nome

//Declaração - é quando se dertermina o tipo de variável
const idade = 18 // só cria uma variavel /=var4

let profissao //Atribuindo valor
profissao = "Estudante" // reatribuindo valor
 //reatribue mas nn redeclara, pode ser vazio

// var //depreciado// Redeclarar e reatribuir 

//Atribuição - é o que vem após o sinal de igualdade que recebe um valou, como const nome = "Jose"

//função
// () --> Parâmetro da função, caso necessário.
// {} --> dentro das chaves tem o que a função ira executar
function nomeFuncao () {
    //bloco de construção
}

// Formas de escrita de textos compostos na função
// camelCase // declaração de variaveis, funcções ...
// snake_case // usado mais em bancos de dados
// PascalCase // componente na declaração do componente de React

//Objetos
let pessoa = {
    nome: "Zé",
    idade: 18,
    profissao: "Estudante",
    tamanho: 180
}

//Array - lista
let frutas = ["Banana", "Maça", "Uva"]
//Array de objetos
let produtos = [
    {
        id: 1, 
    nome: "blusa",
    genero: "masculino",
    marca: "nike",
    valor : 199.99,
    },
    {
        id: 2, 
        nome: "blusa",
        genero: "feminino",
        marca: "nike",
        valor : 200, 
    },
    {
        id: 3, 
        nome: "blusa",
        genero: "Unisex",
        marca: "nike",
        valor : 169.99
    }
    
]

//Template string // Possibilidade de trazer um texto com Js --> Mais rapido e mais seguro de não errar
const mostrarProduto1 = `o valor do ${produtos[0].nome} é ${produtos[0].valor}`

//concatenação
const mostrarProduto2 = "o valor do " + produtos[0].nome + " é " + produtos[0].valor;

let subtração = "100" - 5
console.log(subtração)
let soma = "100" + 5 
let mult = "100" * 5
console.log(soma)
console.log(mult)

//Conversão 
//Number
Number("120") //output --> 120
parseInt() // só arredonda 
parseFloat() //Considera os decimais
String(10) //output --> "10" 
.Tofixed // decimais e arredonda pra cima
// .toUpperCase() //"ZE"
// .toLowerCase() //"ze"

//Métodos de saída
console.log("AGora estou aqui no console") //Mostra informação pro backend
alert("ESTOU AQUI") //Mostra informação pro usuário

//Método de entrada
const usuario = prompt("digite seu nome")
const notificacoes = confirm("Quer receber notificações????? DIZ QUE SIM PFVRR")
alert(usuario)

//Operadores
//operadores aritméticos
// + - * / % ++ -- 

// = += -= *= /= %=
// == igual a// === estritamente igual,tipo e valor, portanto 5 === '5' falso// != diferente de// !== estritamente difente em tipo e valor// > // < // >= // =<
//&& ambos tem que ser iguais ao salvos, portanto, 8&&9 diferente de 6&&7 então falso// || um deles tem que ser verdadeiro, a exemplo de 6||9 =/ 6||7 então verdadeiro // ! negativo, então !true --> false // !! dupla negação !!true --> true


