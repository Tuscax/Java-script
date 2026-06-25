// function calcularMedia() {
//   const n1 = Number(prompt("Digite a primeira nota"));

//   if (isNaN(n1)) {
//     alert("Digite uma nota válida");
//     return;
//   }

//   const n2 = Number(prompt("Digite a segunda nota"));
//   if (isNaN(n2)) {
//     alert("Digite uma nota válida");
//     return;
//   }

//   const n3 = Number(prompt("Digite a terceira nota"));
//   if (isNaN(n3)) {
//     alert("Digite uma nota válida");
//     return;
//   }
  
//   const media = ((n1 + n2 + n3) / 3).toFixed(2);
//   if (media >= 7) {
//     alert(`Passou de ano ${media}`);
//   } 
// else {
//     alert(`Reprovou ${media}`);
//   }
// }
// calcularMedia()
function calcEstac() {
const horas = Number(prompt("Digite a quantidade de horas que você ficou"))
if (horas = 1) { alert("você deve pagar 5 reais")    
}else {
const resultado = (5 + horas * 2).toFixed(1);
alert(`Você deve pagar ${resultado} reais`);
}}
calcEstac()