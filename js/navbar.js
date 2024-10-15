document.addEventListener("DOMContentLoaded", function(){

    const contenedorNavBar = document.querySelector(".contenedor-navbar");

    const navBar = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary custom-navbar">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand active" href="#">LOREM IPSUM</a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active custom-link" aria-current="page" href="#">Dolor</a>
        </li>
        <li class="nav-item">
          <a class="nav-link custom-link" href="#">Sit</a>
        </li>
        <li class="nav-item">
          <a class="nav-link custom-link" aria-current="page" href="#">Amet</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
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