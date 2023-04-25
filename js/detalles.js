




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
  swal({
    title: "¡Producto añadido!",
    text: "Continúa navegando en nuestros productos",
    icon: "success",
    button: "Ver más",
  });
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
 
  
  var cantidadInput = document.getElementById("cantidad");
var aumentarBtn = document.getElementById("mas-btn");
var disminuirBtn = document.getElementById("menos-btn");

// Agregar evento "click" al botón "aumentar"
aumentarBtn.addEventListener("click", function() {
  cantidadInput.value++;
});

// Agregar evento "click" al botón "disminuir"
disminuirBtn.addEventListener("click", function() {
  if (cantidadInput.value > 1) {
    cantidadInput.value--;
  }
});