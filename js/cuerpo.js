document.addEventListener('DOMContentLoaded', function() {

  const contenedorCuerpo = document.querySelector('.contenedor-cuerpo');

  
  const opcionesTexto = `
  <div class="col-md-12 col-lg-3 opciones d-none d-lg-block"> <!-- d-none en pantallas pequeñas, d-lg-block en pantallas grandes -->
    <div class="list-group botones">
      <button class="list-group-item-action btn">Opción 1</button>
      <button class="list-group-item-action btn">Opción 2</button>
      <button class="list-group-item-action btn">Opción 3</button>
      <button class="list-group-item-action btn">Opción 4</button>
    </div>
  </div>
  `;

  
  const cuerpoTexto = `
  <div class="col-lg-9 col-md-12">
  <div class="row">
    <div class="col-md-6 col-lg-4 mb-2 texto">
      <p>Lorem ipsum dolor sit amet, commodo consequat. fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div class="col-md-6 col-lg-4 mb-2 texto">
      <p>Phasellus eleifend semper tem...</p>
    </div>
    <div class="col-md-6 col-lg-4 mb-2 texto">
      <p>Lorem ipsum dolor sit amet, commodo consequat. fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div class="col-md-6 col-lg-4 mb-2 texto">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
    </div>
    <div class="col-md-6 col-lg-4 mb-2 texto">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
    </div>
    <div class="col-md-6 col-lg-4 mb-2 texto">
      <p>Lorem ipsum dolor sit amet, commodo consequat. fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div class="col-md-6 col-lg-4 mb-2 texto">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
    </div>
    <div class="col-md-6 col-lg-4 mb-2 texto">
      <p>Lorem ipsum dolor sit amet, commodo consequat. fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>
</div>
  `;

  contenedorCuerpo.innerHTML = `
      ${opcionesTexto}
      ${cuerpoTexto}
  `;

  const opcionesToggle = document.querySelector('#opcionesToggle');
  const opcionesDiv = document.querySelector('.opciones');

  opcionesToggle.addEventListener('click', function(event) {
    event.preventDefault(); // Evitar que el enlace navegue

    // Alternar la visibilidad del contenedor de opciones solo en pantallas pequeñas
    if (window.innerWidth < 992) { // 992px es el breakpoint para pantallas grandes en Bootstrap
      opcionesDiv.classList.toggle('d-none'); // Alternar clase para mostrar/ocultar
    }
  });

});
