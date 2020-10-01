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

buscarProducto(){
  const urlBase = "http://localhost:3000";
  const searchBox = document.getElementById("searchBox");
  if(searchBox.value === undefined || searchBox.value === ""){
    window.location = `${urlBase}`
  } else {
    // TODO: CRear el metodo de renderizar
    const urlBusqueda = `${urlBase}+/product/view?searchProduct=${searchBox.value}`
    window.location = urlBusqueda;
  }
  
}