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
        <div class="quiensomos">
            <h2>Quienes Somos</h2>
        </div>
        <div>
            <div class="parrafo">
                <div>
                    <p>Bienvenidos a GuardQR, una compañía joven y dinámica comprometida con tu seguridad y bienestar. Nos especializamos en la creación de calcos QR innovadoras y personalizadas que brindan información de salud y contactos de emergencia en situaciones críticas. En GuardQR, creemos en la importancia de contar con una solución eficiente y accesible para comunicar información vital en momentos de emergencia. Nuestros calcos QR, diseñados con tecnología de vanguardia, permiten a los usuarios almacenar de forma segura y confidencial datos relevantes sobre su salud y contactos de emergencia en un formato fácilmente escaneable. Entendemos que cada persona es única y, por lo tanto, adaptamos nuestros calcos QR a tus necesidades específicas. Ya sea que desees incluir información médica relevante, como alergias o condiciones médicas crónicas, o simplemente desees proporcionar datos de contacto de emergencia, nuestros calcos QR pueden personalizarse para adaptarse a tus requerimientos exactos. Nuestro equipo altamente capacitado y apasionado se esfuerza por brindar soluciones de calidad y un servicio excepcional a nuestros clientes. Nos enorgullece ser una empresa en constante crecimiento y desarrollo, siempre a la vanguardia de la tecnología y las tendencias en materia de seguridad y salud. En GuardQR, tu tranquilidad es nuestra prioridad. Nos comprometemos a garantizar que nuestros calcos QR sean confiables, duraderos y fáciles de usar. Además, mantenemos altos estándares de privacidad y seguridad, asegurando que tus datos personales estén protegidos en todo momento. Te invitamos a explorar nuestro sitio web y descubrir más sobre nuestros productos y servicios. Si tienes alguna pregunta o deseas solicitar un calco QR personalizado, no dudes en ponerte en contacto con nuestro equipo de atención al cliente. Estaremos encantados de ayudarte y brindarte la tranquilidad que mereces. Gracias por elegir a GuardQR como tu aliado en seguridad y bienestar. Esperamos poder trabajar juntos para asegurar tu tranquilidad en todo momento.
                    </p>
                </div>
                <div>
                    <img src="../assets/img/GuarD.png" alt="logo guard" class="imagenlogo1">
                </div>
            </div>
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
        <div class="quiensomos">
            <h2>Tarifas</h2>
        </div>
            <section class="tarifas">
            <div>
                <div class="tarjeta">
                    <img src="ruta/imagen1.jpg" alt="1 calco">
                    <h3>1 calco</h3>
                </div>
                <div class="tarjeta">
                    <img src="ruta/imagen2.jpg" alt="2 calcos">
                    <h3>2 calcos</h3>
                </div>
            </div>
            <div>
                <div class="tarjeta">
                    <img src="ruta/imagen3.jpg" alt="3 calcos">
                    <h3>3 calcos</h3>
                </div>
                <div class="tarjeta">
                    <img src="ruta/imagen4.jpg" alt="4 calcos">
                    <h3>4 calcos</h3>
                </div>
            </div>
        </section>

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
    const contenidoDatosdeusuario =`
    <div class="card">
        <div class="card-body">
            <div class="nombretitulo">
                <h2 class="card-title">Juan Perez</h2>
            </div>
            <div>
                <p class="card-text">Alergias: Hongos,Polen,Polvo,Penicilina </p>
                <p class="card-text">Medicina que toma: </p>
                <p class="card-text">Presión Arterial: 120/90</p>
                <p class="card-text">Tipo de Sangre: A+</p>
                <p class="card-text">Condiciones Médicas: Diabético, Hipertensión</p>
            </div>
        </div>
        <div>
            <img src="./assets/img/credencial.png" alt="credencial">
        </div>
    </div>

        <p></p>
    `;
    const datosdeusuarioLink = document.querySelector('#datosdeusuario');
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
    datosdeusuarioLink.addEventListener('click', function(event) {
        event.preventDefault();
        mostrarContenido(contenidoDatosdeusuario);
    });

    // Al cargar la página, muestra el contenido original
    section.innerHTML = contenidoOriginal;
});
