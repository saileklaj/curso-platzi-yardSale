// variables
const activemenuperfil = document.querySelector(".nav-menu-perfil");
const menuperfil = document.querySelector(".desktop-menu");
const burgericon = document.querySelector(".nav-btn-menu");
const menuburger = document.querySelector(".mobile-menu");
const shoppingcaricon = document.querySelector(".navbar-shopping-card");
const shoppingcarlist = document.querySelector(".to-shopping");
const bodytag = document.querySelector("body");
const detailsproduct = document.querySelector(".details-product");
const cerrar = document.querySelector(".product-detail-close");
const closecarritocompra = document.querySelector(".title-container");
const addproduct = document.querySelector(".add-to-cart-button");
const container = document.querySelector(".containerlist");

const thisName = document.querySelector("#name-detail-product");
const thisdescription = document.querySelector("#description-detail-product");
const thisprice = document.querySelector("#price-detail-product");
const thisproductovalue = document.querySelector("#product-value");
const thisproductomoneda = document.querySelector("#product-moneda");
const thisimg = document.querySelector("#img-detail-product");

const valortotal = document.querySelector(".valortotal");
let preciototal=0;

const productlistArray = [
    {
        name: "Star Wars Starships Mandalorian",
        description: "Hot Wheels Star Wars Starships Mandalorian at-ST Raider",
        price: 13.49,
        image: "https://m.media-amazon.com/images/I/712wBkCTK+L._AC_UF894,1000_QL80_.jpg",
        moneda: "US"
    }, {
        name: "star wars tie figh",
        description: "Nave coleccion star wars tie figh..",
        price: 137000,
        image: "https://cdnx.jumpseller.com/hobbies-collectibles/image/26425044/resize/255/255?1660689745",
        moneda: "COP"
    }, {
        name: "R2d2 Y C3po Character Car",
        description: "Mattel Hot Wheels Star Wars R2d2 Y C3po Character Car 2pack",
        price: 225000,
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_834060-MCO45334390825_032021-F.webp",
        moneda: "COP"
    }, {
        name: "Star Wars Mos Eisley",
        description: "Hot Wheels Star Wars Mos Eisley Junction Set",
        price: 140000,
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_880023-MCO50104746652_052022-F.webp",
        moneda: "COP"
    }, {
        name: "Star Wars The Child 1 64 Scale",
        description: "Star Wars The Child 1 64 Scale Character Regalo Colecci...",
        price: 134000,
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_669391-MCO49583235786_042022-F.webp",
        moneda: "COP"
    }, {
        name: "star wars tie figh",
        description: "Nave coleccion star wars tie figh..",
        price: 137000,
        image: "https://cdnx.jumpseller.com/hobbies-collectibles/image/26425044/resize/255/255?1660689745",
        moneda: "COP"
    }, {
        name: "star wars tie figh",
        description: "Nave coleccion star wars tie figh..",
        price: 137000,
        image: "https://cdnx.jumpseller.com/hobbies-collectibles/image/26425044/resize/255/255?1660689745",
        moneda: "COP"
    }
];
const productslist=[
    {
        categoria:"furniture",
        name: "Sofá Venethon 3 Puestos",
        description: "El elegante y exclusivo diseño del sofá Venethon, está fabricado con una resistente estructura de madera perillo, tapizado con espumas de poliuretano indeformables de alta densidad y fibras que ofrecen estabilidad y confort. Se convierte en el aliado ideal para resaltar tus espacios.",
        price: 1802000,
        image: "https://www.mueblesyaccesorios.com.co/cdn/shop/products/sofa-venethon-3p-bolena-negro-mueblesyaccesorios_4.jpg?v=1663613090&width=1080",
        moneda: "COP"
    },
    {
        categoria:"",
        name: "",
        description: "",
        price: 0,
        image: "",
        moneda: "COP"
    },
    {
        categoria:"",
        name: "",
        description: "",
        price: 0,
        image: "",
        moneda: "COP"
    }


]
const Productagregatte = [];

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
/**
 * recibe argumentos para llenar los campos variables de la vista "detalle producto" y los inserta en el HTML
 * Verifica si hay menus visibles, de ser asi los cierra 
 * Verifica si la vista "detalle producto" esta abierta, de ser asi los cierra y lo abre denuevo con los nuevos datos
 * cuando la vista "detalle producto" esta abierta, desabilita el scroll (solo pantalla menor de 640px)
 */
function detailsproductview(name, description, price, image, moneda) {
    // Enviar valores a carta detalles de producto
    thisName.innerText = name;
    thisdescription.innerText = description;
    thisproductovalue.innerText = price;
    thisproductomoneda.innerText = moneda;
    thisprice.append(thisproductovalue, " ", thisproductomoneda)
    thisimg.setAttribute("src", image);
    // manejo de menus desplagables
    if (!menuburger.classList.contains("inactive")) menuburger.classList.add("inactive");
    if (!menuperfil.classList.contains("inactive")) menuperfil.classList.add("inactive");
    if (!shoppingcarlist.classList.contains("inactive")) shoppingcarlist.classList.add("inactive");

    if (detailsproduct.classList.contains("inactive")) {
        detailsproduct.classList.remove("inactive");
        document.body.classList.remove("no-overflow");
    } else {
        detailsproduct.classList.add("inactive");
        detailsproduct.classList.remove("inactive");
        document.body.classList.add("no-overflow");
    }
}

function productList() {
    valortotal.innerText="$ "+ preciototal;
    const cardsContainer = document.querySelector(".cards-container");
    if (Productagregatte.length == 0) {
        const divVacio = document.createElement("div");
        divVacio.classList.add("vacio");
        container.appendChild(divVacio);
    }
    productlistArray.map((product, value) => {
        //div
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.addEventListener("click", () => detailsproductview(product.name, product.description, product.price, product.image, product.moneda));
        // img
        const productCardImage = document.createElement("img");
        productCardImage.classList.add("product-card>img");
        productCardImage.setAttribute("src", product.image);
        //div
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
        //div
        const productDiv = document.createElement("div");
        //p
        const productPrice = document.createElement("p");
        productPrice.classList.add("product-info-div-price");
        productPrice.innerText = "$ " + product.price + " " + product.moneda;
        //p
        const productName = document.createElement("p");
        productName.classList.add("product-info-div-name");
        productName.innerText = product.name;
        // figure
        const productFigure = document.createElement("figure");
        // img
        const productFigureImage = document.createElement("img");
        productFigureImage.classList.add("product-info-figure-img");
        productFigureImage.setAttribute("src", "icons/bt_add_to_cart.svg");

        cardsContainer.appendChild(productCard);
        productCard.appendChild(productCardImage);
        productCard.appendChild(productInfo);
        productInfo.appendChild(productDiv);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productName);
        productInfo.appendChild(productFigure);
        productFigure.appendChild(productFigureImage);
    });
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
productList();