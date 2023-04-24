
//Funcion para activar y desactivar la seleccion de los botones
// Espera a que la página haya terminado de cargar
window.addEventListener('load', function() {
    // Busca todos los botones de tamaño y los guarda en la variable sizeBtns
    const sizeBtns = document.querySelectorAll('.size-btn');
    
    // Por cada botón de tamaño encontrado, agrega un "escucha" que espera a que el usuario haga clic en él
    sizeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remueve la clase "active" de todos los botones de tamaño
        sizeBtns.forEach(btn => {
          btn.classList.remove('active');
        });
        // Agrega la clase "active" solamente al botón de tamaño que fue seleccionado
        btn.classList.add('active');
      });
    });
  });

  // Función que se ejecuta cuando se hace clic en el botón "Añadir a la cesta"
function añadirALaCesta() {
    alert('Producto añadido a la cesta');
  }
  
  // Función que se ejecuta cuando se hace clic en el botón "Comprar"
  function comprar() {
    alert('Producto comprado');
  }
  
  // Espera a que la página haya terminado de cargar
  window.addEventListener('load', function() {
    // Busca el botón "Añadir a la cesta" y agrega un "escucha" que espera a que se haga clic en él
    const añadirALaCestaBtn = document.querySelector('.cestaProducto button');
    añadirALaCestaBtn.addEventListener('click', añadirALaCesta);
  
    // Busca el botón "Comprar" y agrega un "escucha" que espera a que se haga clic en él
    const comprarBtn = document.querySelector('.comprarProducto button');
    comprarBtn.addEventListener('click', comprar);
  });
 

  //////////////////////Mostrar precio y adaptarlo a la cantidad/////////////////////
  
 // Obtener elementos del DOM
var cantidadInput = document.getElementById("cantidad");
var aumentarBtn = document.getElementById("mas-btn");
var disminuirBtn = document.getElementById("menos-btn");

// Agregar evento "click" al botón "aumentar"
aumentarBtn.addEventListener("click", function() {
  cantidadInput.value++; // Incrementar el valor del input
});

// Agregar evento "click" al botón "disminuir"
disminuirBtn.addEventListener("click", function() {
  if (cantidadInput.value > 1) { // Si el valor es mayor a 1
    cantidadInput.value--; // Decrementar el valor del input
  } else { // Si el valor es 1 o menor
    cantidadInput.value = 0; // Establecer el valor del input en 0
  }
});

// Obtener elementos del DOM
const masBtn = document.querySelector("#mas-btn");
const menosBtn = document.querySelector("#menos-btn");
const cantidadInput2 = document.querySelector("#cantidad");
const precio = document.querySelector(".precio");

let precioUnitario = parseInt(precio.textContent);

// Agregar evento "click" al botón "masBtn"
masBtn.addEventListener("click", () => {
  cantidadInput2.value = parseInt(cantidadInput2.value) + 1 -1; // Incrementar el valor del input
  precio.textContent = `${parseInt(cantidadInput2.value) * precioUnitario}€`; // Actualizar el precio total
});

// Agregar evento "click" al botón "menosBtn"
menosBtn.addEventListener("click", () => {
  cantidadInput2.value = parseInt(cantidadInput2.value) - 1; // Decrementar el valor del input
  if (cantidadInput2.value < 0) { // Si el valor es menor a 0
    cantidadInput2.value = 0; // Establecer el valor del input en 0
  }
  precio.textContent = `${parseInt(cantidadInput2.value) * precioUnitario}€`; // Actualizar el precio total
});

  
