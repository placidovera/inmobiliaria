// function jugar() {
//   const opciones = ["piedra", "papel", "tijera"];
//   const resultadoPC = opciones[Math.floor(Math.random() * opciones.length)];
//   return resultadoPC;
// }

// let res = prompt("Ingresa piedra, papel o tijera").toLowerCase();
// let resultadoPC = jugar();

// alert("La computadora eligió: " + resultadoPC);

// // Comparación
// if (res === resultadoPC) {
//   alert("¡Empate!");
// } else if (
//   (res === "piedra" && resultadoPC === "tijera") ||
//   (res === "papel" && resultadoPC === "piedra") ||
//   (res === "tijera" && resultadoPC === "papel")
// ) {
//   alert("¡Ganaste tú!");
// } else if (
//   (res === "piedra" && resultadoPC === "papel") ||
//   (res === "papel" && resultadoPC === "tijera") ||
//   (res === "tijera" && resultadoPC === "piedra")
// ) {
//   alert("¡Ganó la computadora!");
// } else {
//   alert("Entrada no válida");
// }


// const respuestas = [
//   "Sí, sin dudas.",
//   "No cuentes con ello.",
//   "Los astros son confusos… vuelve a preguntar.",
//   "Definitivamente no.",
//   "Todo indica que sí.",
//   "Probablemente, pero no hoy.",
//   "Solo si te lo mereces.",
//   "Es un misterio incluso para mí."
// ];

// let resPc = respuestas[Math.floor(Math.random() * respuestas.length)];

// alert("🔮 Puedes hacer tu pregunta y el Oráculo te dará una respuesta...");

// let resUs = prompt("¿Cuál es tu pregunta?");

// function responder() {
//   alert(`Tu pregunta fue: "${resUs}"\nEl Oráculo dice: "${resPc}"`);
// }

// responder();




// let texto = prompt("ingresa un texto")
// if(texto ===""){
//   alert("ingresa un texto")
// }else{
//     let res= texto.length
//     alert(`el texto ingresado tiene ${res} caracteres`)
//   }
// let texto2 = prompt('ingresa un texto')
// let corte= prompt('en cuanto quieres cortar el texto?')

// function cortar(){
// if(texto2.trim()===""){
//   alert('ingresa un texto')
// }else{
//  let posicion= parseInt(corte)
//  let resultado =texto2.slice(0,posicion)
//      alert(`Texto recortado: "${resultado}"`);
// }
// }
// cortar()

 let texto3 = prompt('Ingresa un texto');

if (texto3.trim() === "") {
  alert("Ingresá un texto");
} else {
  let resultado = texto3.split(" ");
  alert(resultado);
}




















