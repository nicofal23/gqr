const submitBtn = document.getElementById('submitBtn');
const modal = document.getElementById('miModal');
const abrirModalBtn = document.getElementById('abrirModal');
const cerrarModalSpan = document.querySelector('.cerrarModal');

abrirModalBtn.addEventListener('click', function() {
  modal.style.display = 'block';
  modal.classList.add('modal-content');
});

cerrarModalSpan.addEventListener('click', function() {
  modal.style.display = 'none';
  modal.classList.remove('modal-content');
});

window.addEventListener('click', function(event) {
  if (event.target === modal) {
      modal.style.display = 'none';
      modal.classList.remove('modal-content');
  }
});

submitBtn.addEventListener('click', function() {
  const usuarioInput = document.getElementById('exampleInputEmail1').value;
  const contraseñaInput = document.getElementById('exampleInputPassword1').value;

  // Validar que los campos no estén vacíos
  if (!usuarioInput || !contraseñaInput) {
      alert('Por favor, ingresa usuario y contraseña.');
      return;
  }

  const usuarioEncontrado = usuarios.find(usuario => {
      // Verificar que las propiedades existan antes de acceder a ellas
      if (usuario && usuario.usuario && usuario.contraseña) {
          return usuario.usuario === usuarioInput && usuario.contraseña === contraseñaInput;
      }
      return false;
  });

  if (usuarioEncontrado) {
      mostrarDatosUsuario(usuarioEncontrado);
  } else {
      alert('Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.');
  }

  modal.style.display = 'none';
  modal.classList.remove('modal-content');
});

function mostrarDatosUsuario(usuario) {
  const contenedorDatos = document.querySelector('.contenedor-datos-usuario');

  const tarjetaUsuario = document.createElement('div');
  tarjetaUsuario.classList.add('card');

  tarjetaUsuario.innerHTML = `
      <div class="card-body">
        <div class="nombretitulo">
          <h2 class="card-title">${usuario.nombre} ${usuario.apellido}</h2>
        </div>
          <p class="card-text">Alergias: ${usuario.alergia}</p>
          <p class="card-text">Medicina que toma: ${usuario.medicina}</p>
          <p class="card-text">Presión Arterial: ${usuario.presionArterial}</p>
          <p class="card-text">Tipo de Sangre: ${usuario.tipoSangre}</p>
          <p class="card-text">Condiciones Médicas: ${usuario.condicionesMedicas.join(', ')}</p>
      </div>
  `;

  contenedorDatos.appendChild(tarjetaUsuario);
}

