// const lista = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// for(const numero of lista){
//     if(numero % 2 === 0 ){
//         console.log(numero)
//     }
// }
// for(let linha = 0; linha < lista.length; linha++){
//     const celula = lista[linha];
//     for(let linha = 0; linha < celula.length; linha++) {
//        if((celula[linha]% 2 === 0)){console.log(celula[linha])}

        
       
// }}
// // for (let linha = 0; linha < lista.length; linha++) {
// //   const celula = lista[linha];
// //   let resultado = ""
// //   for (let linha = 0; linha < celula.length; linha++) {
// //     resultado += celula[linha] 
// //   }
// //   console.log("[" + resultado + "]");
// // }
const lista = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
]
teste: for(let linha = 0; linha < lista.length; linha++){
  const celula = lista[linha];
for (let linha = 0; linha < celula.length; linha++) {
    if(celula[linha]>=19){
        break teste
    }
    if(celula[linha]%2 === 0){
    }else
    console.log(celula[linha])
}}