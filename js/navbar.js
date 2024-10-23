document.addEventListener("DOMContentLoaded", function(){

    const contenedorNavBar = document.querySelector(".contenedor-navbar");

    const navBar = `
  <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">LOREM IPSUM</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarContent">
      
      <form class="d-flex w-100 mb-3 mb-lg-0 order-1 order-lg-0 d-lg-none" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      </form>

      
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 order-0 order-lg-1">
        <li class="nav-item mx-lg-5">
          <a class="nav-link active mx-2" aria-current="page" href="#">Dolor</a>
        </li>
        <li class="nav-item mx-lg-5">
          <a class="nav-link mx-2" href="#">Sit</a>
        </li>
        <li class="nav-item mx-lg-5">
          <a class="nav-link mx-2" href="#">Amet</a>
        </li>
        <li class="nav-item d-lg-none">
          <a class="nav-link mx-2" href="#">Opciones</a>
        </li>
      </ul>

      
      <form class="d-none d-lg-flex order-2 ms-lg-3" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      </form>
    </div>
  </div>
</nav>
    `;

    contenedorNavBar.innerHTML = navBar;

    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
        link.addEventListener('click', function(){
            links.forEach(l => l.classList.remove('active'));

            this.classList.add('active');
        });
    });
    
});