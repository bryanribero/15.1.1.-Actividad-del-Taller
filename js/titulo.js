document.addEventListener('DOMContentLoaded', function(){

    const contenedorTitulo = document.querySelector('.contenedor-titulo');

    const contenidoTitulo = `
    <h3 class="titulo">Lorem ipsum...</h3>

    <!-- Comienza el carrusel -->

<div class="container mt-5">
     <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2500">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <h5>Lorem ipsum dolor sit amet</h5>
            </div>
            <div class="carousel-item">
                <h5>Consectetur adipiscing elit</h5>
            </div>
            <div class="carousel-item">
                <h5>Sed do eiusmod tempor incididunt</h5>
            </div>
        </div>
    </div>
</div>
    `

    contenedorTitulo.innerHTML = contenidoTitulo;

});