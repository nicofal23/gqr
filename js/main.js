// document.addEventListener('DOMContentLoaded', function() {
//     const section = document.querySelector('section'); // Selecciona el elemento <section>
    
//     const contenidoHTML = `
//         <div class="informacion">
//             <div class="contenedorparrafo">
//                 <div>
//                     <p>¡Bienvenidos a nuestra página web de <strong>QR</strong>!<br>con datos de salud para cascos de moto!
//                     Descubre cómo nuestra tecnología de códigos <strong>QR</strong><br>puede brindarte acceso rápido y seguro a tus datos de salud en caso de accidente.
//                     ¡Mantente cubierto en la carretera!</p>
//                 </div>
//                 <div>
//                     <p>Nuestros códigos <strong>QR</strong> están hechos para soportar el agua y ofrecer un escaneo rápido y preciso, incluso en condiciones adversas. ¡No importa si llueve tu código <strong>QR</strong> estará siempre listo para brindarte acceso instantáneo a información vital!</p>
//                 </div>
//             </div>
//             <div class="contenedor1">
//                 <img src="./assets/img/oliver.jpg" alt="viajemoto" class="img1moto">
//             </div>  
//         </div>
//         <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
//             <div class="carousel-inner">
//                 <div class="carousel-item active">
//                     <img src="https://via.placeholder.com/800x400" class="d-block w-100" alt="...">
//                 </div>
//                 <div class="carousel-item">
//                     <img src="https://via.placeholder.com/800x400" class="d-block w-100" alt="...">
//                 </div>
//                 <!-- Agrega más elementos del carrusel según sea necesario -->
//             </div>
//             <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
//                 <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                 <span class="visually-hidden">Previous</span>
//             </button>
//             <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
//                 <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                 <span class="visually-hidden">Next</span>
//             </button>
//         </div>
//         <p></p>
//     `;
    
//     // Agrega el contenido HTML al elemento <section>
//     section.innerHTML = contenidoHTML;
// });



document.addEventListener('DOMContentLoaded', function() {
    const section = document.querySelector('section'); // Selecciona el elemento <section>

    const contenidoOriginal = `
            <div class="informacion">
                <div class="contenedorparrafo">
                    <div>
                        <p>¡Bienvenidos a nuestra página web de <strong>QR</strong>!<br>con datos de salud para cascos de moto!
                        Descubre cómo nuestra tecnología de códigos <strong>QR</strong><br>puede brindarte acceso rápido y seguro a tus datos de salud en caso de accidente.
                        ¡Mantente cubierto en la carretera!</p>
                    </div>
                    <div>
                        <p>Nuestros códigos <strong>QR</strong> están hechos para soportar el agua y ofrecer un escaneo rápido y preciso, incluso en condiciones adversas. ¡No importa si llueve tu código <strong>QR</strong> estará siempre listo para brindarte acceso instantáneo a información vital!</p>
                    </div>
                </div>
                <div class="contenedor1">
                    <img src="./assets/img/oliver.jpg" alt="viajemoto" class="img1moto">
                </div>  
            </div>
            <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="./assets/img/harley.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="./assets/img/mathew.jpg" class="d-block w-100" alt="...">
                    </div>
                    <!-- Agrega más elementos del carrusel según sea necesario -->
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        <p></p>
    `;

    const contenidoAcercaDe = `
        <div class="informacion">
            <!-- ... Contenido Acerca de ... -->
        </div>
        <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
            <!-- ... Contenido del carrusel para Acerca de ... -->
        </div>
        <p></p>
    `;

    const contenidoContacto = `
        <div class="informacion">
            <!-- ... Contenido Contacto ... -->
        </div>
        <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
            <!-- ... Contenido del carrusel para Contacto ... -->
        </div>
        <p></p>
    `;

    const contenidoTarifas = `
        <div class="informacion">
            <!-- ... Contenido Tarifas ... -->
        </div>
        <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
            <!-- ... Contenido del carrusel para Tarifas ... -->
        </div>
        <p></p>
    `;

    const contenidoInstrucciones = `
        <div class="informacion">
            <!-- ... Contenido Instrucciones ... -->
        </div>
        <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
            <!-- ... Contenido del carrusel para Instrucciones ... -->
        </div>
        <p></p>
    `;

    const contenidoPuntuacion = `
        <div class="informacion">
            <!-- ... Contenido Puntuación ... -->
        </div>
        <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
            <!-- ... Contenido del carrusel para Puntuación ... -->
        </div>
        <p></p>
    `;

    const acercaDeLink = document.querySelector('#acerca');
    const contactoLink = document.querySelector('#contacto');
    const tarifasLink = document.querySelector('#tarifas');
    const instruccionesLink = document.querySelector('#instrucciones');
    const puntuacionLink = document.querySelector('#puntuacion');

    function mostrarContenido(contenido) {
        section.innerHTML = contenido;
    }

    // Agrega eventos clic a los enlaces de navegación
    acercaDeLink.addEventListener('click', function(event) {
        event.preventDefault();
        mostrarContenido(contenidoAcercaDe);
    });

    contactoLink.addEventListener('click', function(event) {
        event.preventDefault();
        mostrarContenido(contenidoContacto);
    });

    tarifasLink.addEventListener('click', function(event) {
        event.preventDefault();
        mostrarContenido(contenidoTarifas);
    });

    instruccionesLink.addEventListener('click', function(event) {
        event.preventDefault();
        mostrarContenido(contenidoInstrucciones);
    });

    puntuacionLink.addEventListener('click', function(event) {
        event.preventDefault();
        mostrarContenido(contenidoPuntuacion);
    });

    // Al cargar la página, muestra el contenido original
    section.innerHTML = contenidoOriginal;
});
