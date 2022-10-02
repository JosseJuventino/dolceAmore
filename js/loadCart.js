//MOSTRAR LOS PRODUCTOS DEL CARRITO
var cartArrayJson = JSON.parse(localStorage.getItem("cart"));
var cartContainer = document.getElementById("cartContainer");


 cartArrayJson.forEach(element => {
        cartContainer.innerHTML += `
             <div class="element">

                    <div class="elementImage">
                        <div class="imageCir imageCart">
                            <img src="`+ element.image +`" alt="">
                        </div>
                    </div>
                    <div class="infoOp">
                        <div class="elementInfo">
                            <h3>`+ element.name +`</h3>
                            <h3 style="display: none"class="IdProduct">`+element.id+`</h3>
                            <p>$ <span class="price">`+ element.price +`</span> </p>
                        </div>
                    </div>
                    <div class="op">
                        <div class="quantity">
                            <button class="btn btn-quantity btnDecrement" id="btnDecrement"><i class="fa-solid fa-minus"></i></button>
                            <input type="text" value="`+element.cantidad+`" class="inpCnt">
                            <button class="btn btn-quantity btnIncrement" id="btnIncrement"><i class="fa-solid fa-plus"></i></button>
                        </div>
                        <div class="delete btnDelete">
                            <button class="btn btn-delete deleteBtn"><i class="fa-solid fa-xmark"></i></button>
                        </div>
                    </div>
                    
                </div>                
    `
});
calcularPrecioTotal();
