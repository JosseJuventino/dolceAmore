var botonIncrementar = document.querySelectorAll(".btnIncrement");
var botonDecrementar = document.querySelectorAll(".btnDecrement");
var cantidad = document.querySelectorAll(".inpCnt");
var precio = document.querySelectorAll(".price");
var btnDelete = document.querySelectorAll(".btnDelete");
var totalPrice = document.getElementById("precioTotal");
var idProduct = document.querySelectorAll(".IdProduct");
console.log(botonIncrementar);
var cartArrayJson = JSON.parse(localStorage.getItem("cart"));
var cartContainer = document.getElementById("cartContainer");


// Saber a que boton le estoy dando click
for (let i = 0; i < botonIncrementar.length; i++) {
    botonIncrementar[i].addEventListener("click", () => {
        botonIncrementar[i].parentElement.children[1].value++;

        var nameProduct = botonIncrementar[i].parentElement.parentElement.parentElement.children[1].children[0].children[0].innerHTML;
        cartArrayJson.forEach(element => {

            if (element.name == nameProduct) {
                console.log("elemento1"+element.name);
                console.log("elemento1"+nameProduct);
                element.cantidad++;
                localStorage.setItem("cart", JSON.stringify(cartArrayJson));
            }
        });
        

        calcularPrecioTotal();
    });
    calcularPrecioTotal();
}

for (let i = 0; i < botonDecrementar.length; i++) {
    botonDecrementar[i].addEventListener("click", () => {
        var nameProduct = botonIncrementar[i].parentElement.parentElement.parentElement.children[1].children[0].children[0].innerHTML;
        var input = botonDecrementar[i].parentElement.children[1];
        
        if (input.value == 1) {
            input.value = 1;
            cartArrayJson.forEach(element => {

                if (element.name == nameProduct) {
                    console.log("elemento1"+element.name);
                    console.log("elemento1"+nameProduct);
                    element.cantidad= 1;
                    localStorage.setItem("cart", JSON.stringify(cartArrayJson));
                }
            });
            calcularPrecioTotal();
        } else {
            cartArrayJson.forEach(element => {

                if (element.name == nameProduct) {
                    console.log("elemento1"+element.name);
                    console.log("elemento1"+nameProduct);
                    element.cantidad--;
                    localStorage.setItem("cart", JSON.stringify(cartArrayJson));
                }
            });
            botonDecrementar[i].parentElement.children[1].value--;
            calcularPrecioTotal();

        }
    });
}

for (let i = 0; i < botonDecrementar.length; i++) {
    btnDelete[i].addEventListener("click", () => {

        var precio = parseFloat(btnDelete[i].parentElement.parentElement.children[1].children[0].children[2].children[0].innerHTML);
        var cantidad = parseFloat(btnDelete[i].parentElement.children[0].children[1].value);
        var id = btnDelete[i].parentElement.parentElement.children[1].children[0].children[1].innerHTML;
        var name = btnDelete[i].parentElement.parentElement.children[1].children[0].children[0].innerHTML;
        cartArrayJson.forEach(element => {
            if (element.name == name) {
                cartArrayJson = cartArrayJson.filter((item) => item.id !== element.id);
                localStorage.setItem("cart", JSON.stringify(cartArrayJson));
            }

        });
        var precioTotal = precio * cantidad;
        totalPrice.innerHTML = totalPrice.innerHTML - precioTotal;

        btnDelete[i].parentElement.parentElement.remove();

        if (cartContainer.children.length == 0) {
            localStorage.clear();
        }

    });
}

function setCart(array, ind) {
    console.log(array);
    idProduct[ind].innerHTML = ind;
    let cartArrayString = JSON.stringify(array);
    localStorage.setItem("cart", cartArrayString);


}
// actualizar el precio total
function actualizarPrecioTotal() {
    for (let i = 0; i < cantidad.length; i++) {
        cantidad[i].addEventListener("change", () => {
            calcularPrecioTotal();
        });
    }
}



//Calcular el precio total
function calcularPrecioTotal() {
    var precioTotal = 0;
    for (let i = 0; i < precio.length; i++) {
        precioTotal += parseFloat(precio[i].innerHTML) * parseFloat(cantidad[i].value);
    }
    totalPrice.innerHTML = precioTotal;
    console.log(precioTotal);
}

calcularPrecioTotal();




