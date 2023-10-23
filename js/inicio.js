    const modal = document.getElementById('miModal');
    const abrirModalBtn = document.getElementById('abrirModal');
    const cerrarModalSpan = document.getElementsByClassName('cerrarModal')[0];
    const submitBtn = document.getElementById('submitBtn');

    // Abre el modal cuando se hace clic en el botón
    abrirModalBtn.onclick = function () {
      modal.style.display = 'block';
      modal.classList.add('modal-content'); // Agrega la clase al modal directamente
    };

    // Cierra el modal cuando se hace clic en la x
    cerrarModalSpan.onclick = function () {
      modal.style.display = 'none';
      modal.classList.remove('modal-content'); // Quita la clase al modal directamente
    };

    // Cierra el modal cuando se hace clic fuera de él
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = 'none';
        modal.classList.remove('modal-content'); // Quita la clase al modal directamente
      }
    };

    // Lógica para el botón de enviar (aquí puedes agregar la lógica que desees)
    submitBtn.onclick = function () {
      // Obtén los valores del formulario
      const email = document.getElementById('exampleInputEmail1').value;
      const password = document.getElementById('exampleInputPassword1').value;
      // Hacer algo con los valores (por ejemplo, enviarlos a un servidor)
      console.log('Email:', email);
      console.log('Password:', password);

      // Cierra el modal después de enviar el formulario
      modal.style.display = 'none';
    };

