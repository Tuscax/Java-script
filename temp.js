// // function celc() {
// //     const um = confirm("Você quer converter um celcsius para Fahrenheit?")
// //     if (um === true) {
// //         const dois = Number(prompt("digite um número"))
// //         let tres = (dois*9/5) + 32
// //         alert(tres)
// //         return
// //     } else {
// //         return

// //     }
// // }
// // celc()
// // function fare() {
// //     const um = confirm("Você quer converter um Fahrenheit para  celcsius?")
// //     if (um === true) {
// //         const dois = Number(prompt("digite um número"))
// //         let tres = (dois*9/5) + 32
// //         console.log(tres)

// //     } else {
// //         return

// //     }
// // }
// // fare()
document.getElementById("celc").addEventListener("input", traducao);
document.getElementById("fahr").addEventListener("input", traducaoFar);

function traducao() {
  const celc = Number(document.getElementById("celc").value);
  const um = (celc * 9) / 5 + 32;
  console.log(um);
  traducaoC.innerHTML = um;
}

function traducaoFar() {
  const fahr = Number(document.getElementById("fahr").value);
  const dois = ((fahr - 32) * 5) / 9;
  console.log(dois);
  traducaoF.innerHTML = dois;
if (dois == 67) {
document.getElementById("imagem").classList="visible"
}
}

