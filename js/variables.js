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
        categoria:"Blusas",
        name: "Blusa color Salmón",
        description: "Blusa tejida con hilo crochet color salmon, de tiras",
        price: 100000,
        image: "https://i.pinimg.com/originals/07/16/c9/0716c9ab4bbdab480f42b0527e8738a6.jpg",
        moneda: "COP"
    }, {
        categoria:"Blusas",
        name: "Blusa calada",
        description: "Blusa calada con degradado en azul y amarillo",
        price: 98000,
        image: "https://cdn.mycrafts.es/i/1/6/31/blusa-calada-crochet-video-1-gN3k-o.jpg",
        moneda: "COP"
    }, {
        categoria:"Blusas",
        name: "Top De Ganchillo Mujer",
        description: "Top De Ganchillo Para Mujer, Cuello Holgado, Manga Larga, Ho",
        price: 112000,
        image: "https://http2.mlstatic.com/D_NQ_NP_690496-CBT69030218908_042023-O.webp",
        moneda: "COP"
    }, {
        categoria:"Blusas",
        name: "Blusa Tejida Mujer NEW U / MENTA",
        description: "Blusa tejida manga larga fondo entero cuello bandeja",
        price: 179900,
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ2S4wJTk1H9qZL0SRwtm-uktWMyzpMudf5y_opULmLiLMIR57xwA-mUwIfb8vn6SmzSorGADH_rZSDhLysao1gEeANdG9c0gAD7QUsIS3UV_ZCjfZ5dHKt&usqp=CAE",
        moneda: "COP"
    }, {
        categoria:"Muñecos",
        name: "Amigurumi Chilindrina",
        description: "Amigurumi chilindrina 20cm",
        price: 40000,
        image: "https://i.pinimg.com/564x/23/32/97/233297dfd02f8fc9e818dd2f9260ea8d.jpg",
        moneda: "COP"
    }, {
        categoria:"Muñecos",
        name: "Anya Amigurumi Doll Pattern",
        description: "Anya Amigurumi Doll Pattern 40cm",
        price: 137000,
        image: "https://greenfrogcrochet.com/wp-content/uploads/2022/06/A-web-4.jpg",
        moneda: "COP"
    }, {
        categoria:"Muñecos",
        name: "Totoro amigumi",
        description: "Totoro amigumi 20cm",
        price: 60000,
        image: "https://www.lovelycraft.com/wp-content/uploads/2021/07/totoro-bunny-gift-summer-doll-pattern.jpg",
        moneda: "COP"
    }
];
const productslist=[]
const Productagregatte = [];
