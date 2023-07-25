
// Eventos click
// Menu desplegable de perfil
activemenuperfil.addEventListener("click", menuperfilToggle);
// Menu desplegable vista movil
burgericon.addEventListener("click", menuburgertoggle);
// Menu desplegable carrito de compras
shoppingcaricon.addEventListener("click", menushoppingcar);
// Boton de cierre de carta detalle de producto
cerrar.addEventListener("click", closecart);
closecarritocompra.addEventListener("click", closeCarrito);
addproduct.addEventListener("click", agregarproducto);

// const filter = document.querySelectorAll(".filter")
// filter.addEventListener("click", (event)=>filtrarproductos(event));




// funciones
// funcion para cerra de carta detalle de producto
function closecart() {
    detailsproduct.classList.add("inactive")
}

function closeCarrito() {
    shoppingcarlist.classList.add("inactive")
}
/**
 * Verifica si hay menus visibles, de ser asi los cierra 
 * activa la visibiidad de menu perfil
 * cuando menu perfil esta visible, gira la flecha 
 */
function menuperfilToggle() {
    const flecha = document.querySelector(".nav-menu-perfil a img");
    if (!menuburger.classList.contains("inactive")) menuburger.classList.add("inactive");
    if (!shoppingcarlist.classList.contains("inactive")) shoppingcarlist.classList.add("inactive");
    if (!detailsproduct.classList.contains("inactive")) detailsproduct.classList.add("inactive");
    menuperfil.classList.toggle("inactive");
    flecha.classList.toggle("giro270");
}
/**
 * Verifica si hay menus visibles, de ser asi los cierra 
 * activa la visibiidad del menu de dispositivos moviles
 * cuando menu dispositivos moviles esta visible, desabilita el scroll (solo pantalla menor de 640px)
 */
function menuburgertoggle() {
    if (!menuperfil.classList.contains("inactive")) menuperfil.classList.add("inactive");
    if (!shoppingcarlist.classList.contains("inactive")) shoppingcarlist.classList.add("inactive");
    if (!detailsproduct.classList.contains("inactive")) detailsproduct.classList.add("inactive");
    menuburger.classList.toggle("inactive");
    if (!menuburger.classList.contains("inactive")) {
        bodytag.classList.add("no-overflow");
    } else {
        bodytag.classList.remove("no-overflow");
    }
}
/**
 * Verifica si hay menus visibles, de ser asi los cierra 
 * activa la visibiidad del menu de carrito de compras
 * cuando menu carrito de compras esta visible, desabilita el scroll (solo pantalla menor de 640px)
 */
function menushoppingcar() {
    if (!menuburger.classList.contains("inactive")) menuburger.classList.add("inactive");
    if (!menuperfil.classList.contains("inactive")) menuperfil.classList.add("inactive");
    if (!detailsproduct.classList.contains("inactive")) detailsproduct.classList.add("inactive");
    shoppingcarlist.classList.toggle("inactive");

    if (!shoppingcarlist.classList.contains("inactive")) {
        bodytag.classList.add("no-overflow");

    } else {
        bodytag.classList.remove("no-overflow");
    }
}


function carrito() {
    const carritocompra= document.querySelector(".carrito");
    const cantidad= document.querySelector(".cantidad");
    if(Productagregatte.length==0){
        carritocompra.setAttribute("src","./icons/icon_shopping_cart.svg");        
        valortotal.innerText="$ "+ 0;
    }
    
    if(Productagregatte.length==1){
        cantidad.classList.add("inactive");
        carritocompra.setAttribute("src","./icons/icon_shopping_cart_notification.svg");
    }
    if(Productagregatte.length>1){
        cantidad.classList.remove("inactive");
        cantidad.innerText=Productagregatte.length;
    }
    // Elimina los elementos pintados
    while (container.firstChild) {
        preciototal=0;
        container.removeChild(container.lastChild);
    }
    /** Recorre los productos agregados al carrito de compras(array)
     *  y los pinta en el navegador
    */
    Productagregatte?.map((index, value) => {
        
        preciototal= Number(preciototal)+Number(index.price);
        valortotal.innerText="$ "+preciototal;
        
        const shoppingCard = document.createElement("div");
        shoppingCard.classList.add("shopping-cart");
        const figure = document.createElement("figure");
        const image = document.createElement("img");
        image.setAttribute("src", index.image);
        const name = document.createElement("p");
        name.innerText = index.name;
        const price = document.createElement("p");
        price.innerText = "$ " + index.price + " " + index.moneda;
        const iconclose = document.createElement("img");
        iconclose.setAttribute("src", "./icons/icon_close.png");
        // Evento click para eliminar producto de la lista del carrido de compras
        iconclose.addEventListener("click", () => popProduct(value,Number(index.price)))
        container.appendChild(shoppingCard);
        shoppingCard.appendChild(figure);
        figure.appendChild(image);
        shoppingCard.appendChild(name);
        shoppingCard.appendChild(price);
        shoppingCard.appendChild(iconclose);

    });
    /*** Funcion anidada en carrito de compra que elimina el 
     * producto del carrito de compra y vuelve a llamar la funcion
     * padre (carrito) para volver a pintar el carrito
     */
    function popProduct(valor,precio) {
        console.log("preciototal", preciototal);
        console.log("precio",precio);
        let indice= Productagregatte.indexOf(valor);
        Productagregatte.splice(indice,1);
        preciototal=Number(preciototal)-precio;
        console.log("precioresultante", preciototal);
        carrito();

    }
}

function agregarproducto() {
    Productagregatte.unshift({
        name: thisName.textContent,
        image: thisimg.src,
        price: thisproductovalue.textContent,
        moneda: thisproductomoneda.textContent,
    })
    detailsproduct.classList.toggle("inactive");
    carrito();
}

function filtrarproductos(event){
    // event.preventDefault();
    // console.log(filter.textContent);
    console.log("filter");
}
