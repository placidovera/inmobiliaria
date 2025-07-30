const { createElement } = require("react");


let productos = [
  {
     id:1,
    nombre: "aceite",
    presentacion: "1 litro",
    marca: "patito",
    precio: 15
  },
  {
     id:2,
    nombre: "aceite",
    presentacion: "1 litro",
    marca: "cocinero",
    precio: 10
  },
   {
     id:3,
    nombre: "aceite",
    presentacion: "1 litro",
    marca: "Gold",
    precio: 20
  },
   {
    id:4,
    nombre: "aceite",
    presentacion: "1 litro",
    marca: "chiflito",
    precio: 8
  }
];
let carrito = []


function agregarCarrito(selecionCarrito){
  let carritoCarga = productos.find(producto=>procucto.id ===selecionCarrito)
  if (carritoCarga){
    carrito.push(carritoCarga)
    alert(`${carritoCarga.marca} agregado al carrito`)
  } else{
    alert("producto no encontrado")
  }
}
function mostrarCarrito(){
  if(carrito.length === 0){
  alert("el carrito esta vacio")}
  else{
    alert("cotenido del carrito")
    carrito.forEach(productos,index)
    alert(`${index + 1}.-${productos.nombre}-${productos.marca}-${productos.precio}-${productos.presentacion}`)
  }
}
const contenedorProductos = document.getElementById("contenedorDeProductos")

productos.forEach(producto=>{
  const divProcucto = createElement("div")
   divProcucto.classList.add(producto)
})