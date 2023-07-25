const arrayfiltradofilter=document.querySelectorAll('.filter');
const arrayfiltradosearch=document.querySelector('.search-input')
arrayfiltradosearch.addEventListener("input", filtrarproductos);

function filtrarproductos(){
    console.log("filtrarsearch",arrayfiltradosearch.value);
    if(arrayfiltradosearch.value==""){
        productList(productlistArray);
    }else{
        const lista=productlistArray.filter(({name})=>name.includes(arrayfiltradosearch.value));
        productList(lista);
    }
    
}
arrayfiltradofilter.forEach(item => {
    item.addEventListener('click', event => {
        if (event.target.innerText=="All") {
            productList(productlistArray);
        }else{
            const lista=productlistArray.filter(({categoria})=>categoria==event.target.innerText);
        productList(lista);
        }
        
    });
});

function limpiarproduct(cardsContainer){
    while (cardsContainer.firstChild) {
        // preciototal=0;
        cardsContainer.removeChild(cardsContainer.lastChild);
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

function productList(listas=productlistArray) {
    // console.log("eventosss", listas );
    const cardsContainer = document.querySelector(".cards-container");
    limpiarproduct(cardsContainer);
    valortotal.innerText="$ "+ preciototal;
   
    if (Productagregatte.length == 0) {
        const divVacio = document.createElement("div");
        divVacio.classList.add("vacio");
        container.appendChild(divVacio);
    }
    
    listas.map((product, value) => {
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
productList();