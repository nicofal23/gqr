const express = require('express');
const app = express();
const usuarios = require('./js/usuarios');


// Ruta para manejar las solicitudes de usuario por nombre de usuario
app.get('/usuario/:nombreUsuario', (req, res) => {
    const nombreUsuario = req.params.nombreUsuario;

    // Buscar el usuario por nombre de usuario en el array de usuarios
    const usuario = usuarios.find(u => u.usuario === nombreUsuario);

    if (usuario) {
        // Enviar los datos del usuario como respuesta JSON
        res.json(usuario);
    } else {
        // Si el usuario no existe, enviar una respuesta de error
        res.status(404).json({ error: 'Usuario no encontrado' });
    }
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});

