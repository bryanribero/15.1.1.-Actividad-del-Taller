document.addEventListener('DOMContentLoaded', function() {

  const contenedorCuerpo = document.querySelector('.contenedor-cuerpo');

  
  const opcionesTexto = `
  <div class="col-md-3">
  <div class="list-group botones">
    <button class=" list-group-item-action btn">Opción 1</button>
    <button class=" list-group-item-action btn">Opción 2</button>
    <button class=" list-group-item-action btn">Opción 3</button>
    <button class=" list-group-item-action btn">Opción 4</button>
  </div>
</div>
  `;

  
  const cuerpoTexto = `
  <div class="col-md-9">
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
});
