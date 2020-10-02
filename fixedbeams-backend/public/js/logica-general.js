function disminuirCantidad(){
    let contador = document.getElementById("contador");
    if(Number(contador.innerHTML) > 0){
      contador.innerHTML = Number(contador.innerHTML) - 1;
    }
}

function aumentarCantidad(){
  let contador = document.getElementById("contador");
  let stock = document.getElementById("stock");
  if(Number(contador.innerHTML) < Number(stock.innerHTML)){
    contador.innerHTML = Number(contador.innerHTML) + 1;
  }
}

function guardarProducto(){
  const urlBase = "http://localhost:3000";
  // ID del producto
  let idProduct = document.getElementById("idProduct");
  idProduct = Number(idProduct.innerHTML);
  // Cantidad comprada
  let contador = document.getElementById("contador");
  contador = Number(contador.innerHTML);
  alert("Se guardara el producto");
  window.location = `${urlBase}/product/${idProduct}/${contador}`;
}


function buscarDesdeSearch(){
  buscarProducto("searchBox")
}

function buscarDesdeMainBar(){
  buscarProducto("searchMainbar")
}

function buscarProducto(id){
  const urlBase = "http://localhost:3000";
  const searchBox = document.getElementById(id);
  if(searchBox.value === undefined || searchBox.value === ""){
    window.location = `${urlBase}`
  } else {
    const urlBusqueda = `${urlBase}/product/view/search?searchProduct=${searchBox.value}`
    window.location = urlBusqueda;
  }
}

function goToBill(){
  alert("Bill")
}
function cleanCart(){
  alert("Clean")
}

function createBill(){
  alert("createBill")
}