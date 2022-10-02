
var backButton = document.getElementById("backForm");
var nextButton = document.getElementById("nextForm");
var formOne = document.getElementById("firstForm");
var formTwo = document.getElementById("secondForm");

nextButton.addEventListener("click", function() { 

    formOne.style.display = "none";
    formTwo.style.display = "block";
    
});
backButton.addEventListener("click", function() { 
    formOne.style.display = "block";

    //animacion al cerrar modal;
    formTwo.style.display = "none";
      
});


//Ventana modal para el formulario de registro
var openModal = document.getElementById('openModal');
var modal = document.getElementById('modal');
var closeModal = document.getElementById('closeModal');

openModal.addEventListener('click', function(){
    modal.classList.remove('modalOut');
    modal.style.display = 'flex';
    //animacion al abrir modal
    modal.classList.add('modalIn');
});

closeModal.addEventListener('click', function(){
    modal.classList.remove('modalIn');
    //animacion al cerrar modal
    modal.classList.add('modalOut');
    setTimeout(function(){
        modal.style.display = 'none';
        modal.classList.remove('modalOut');
    }, 200);
});

