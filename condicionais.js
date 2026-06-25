// //Condicionais
// //Se e se não

// let numero = prompt("digite um número para saber se é inteiro");

// if (numero.includes(".") && !isNaN(Number(numero))) {
//   console.log(numero);
//   alert("Possui decimal");
// } else if (isNaN(Number(numero))){
//     alert("Número invalido ou não é um número")
// }
//  else {
//   alert("número é inteiro");
// }
// // % -> resto da divisão 
// const verificarNumero = Number(prompt("Digite um número para saber se é ímpar ou par"))
// if (verificarNumero % 2 === 0) {
//     alert("Par")
    
// }else if (isNaN(verificarNumero)) {
//     alert("IMBECIL, BURRO, BURRO, BURRO, COMO UM NÚMERO, BURRO,BURRO, BURRO")
// } 
// else { alert("impar")   
// }
//IF sem else
// const isModalOpen = true
// if (isModalOpen) {
//     console.log("Mostrar modal")
// }
// const verificarIdade = Number(prompt("Digite sua idade"))
// if (verificarIdade > 0 &&  verificarIdade <= 12) {
//     alert("Menor de idade")
// }else if (verificarIdade >12  &&  verificarIdade< 18) {
//     alert("É adolecente")    
// }else if (verificarIdade >= 18 && verificarIdade < 65 ){
//     alert("Maior de idade")
// }else if (verificarIdade >= 65 && verificarIdade <= 125){
//     alert("É capenga já")
// }
// else if (verificarIdade > 125) {
//     alert("Morto")
// }
// //switch case
const verificarDia = Number(prompt("digite o número que representa o dia da semana"))
switch (verificarDia) {
  case 1:
    alert("Domingo");
    break;
  case 2:
    alert("Segunda");
    break;
  case 3:
    alert("Terça");
    break;
  case 4:
    alert("Quarta");
    break;
  case 5:
    alert("Quinta");
    break;
  case 6:
    alert("Sexta");
    break;
  case 7:
    alert("Sabado");
    break;
}