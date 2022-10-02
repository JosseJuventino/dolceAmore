var images = document.querySelectorAll(".imageCart");
var names = document.querySelectorAll(".nameP");
var price = document.querySelectorAll(".price");
var buttons = document.querySelectorAll(".btnCart");



for (let i = 0; i < buttons.length; i++) {


    buttons[i].addEventListener("click", (e) => {
        e.preventDefault();
        var cartArrayJson = JSON.parse(localStorage.getItem("cart"));

        if (cartArrayJson == null) {
            cartArrayJson = [];
        }

        var cart = {
            id: cartArrayJson.length,
            image: images[i].src,
            name: names[i].innerHTML,
            price: price[i].innerHTML,
            cantidad: "1"
        };


        setCart(cart)

    });

}


function setCart(array) {
    console.log(array);
    //Validar si ya se encuentra en el carrito 
    var cartArrayJson = JSON.parse(localStorage.getItem("cart"));
    if (cartArrayJson == null) {
        cartArrayJson = [];
    }
    var existe = false;
    for (let i = 0; i < cartArrayJson.length; i++) {
        if (cartArrayJson[i].name == array.name) {
            existe = true;
            break;
            
        }
    }
    if (existe == false) {
        var alerta = document.getElementById("alert");
        var cartArrayJson = JSON.parse(localStorage.getItem("cart")) || [];
        cartArrayJson.push(array);
        let cartArrayString = JSON.stringify(cartArrayJson);
        localStorage.setItem("cart", cartArrayString);



        alerta.style.display = "flex";
        alerta.style.animation = "alert 2s ease-in-out";
        alerta.style.background = "#46c221";
        alerta.innerHTML = `<p> <i class="fa-solid fa-circle-exclamation"></i> El producto se agrego correctamente al carrito</p>`

        setTimeout(() => {
            document.getElementById("alert").style.display = "none";
        }, 2000);
    } else {
        var alerta = document.getElementById("alert");
        alerta.style.display = "flex";
        alerta.style.animation = "alert 2s ease-in-out";
        alerta.style.backgroundColor = "#bfc92a";
        alerta.innerHTML = `<p> <i class="fa-solid fa-circle-exclamation"></i> El producto ya se ha agregado al carrito</p>`

        setTimeout(() => {
            document.getElementById("alert").style.display = "none";
        }, 2000);
    }





}