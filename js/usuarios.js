const usuarios = [
    { 
        nombre: 'Nicolas', 
        apellido: 'Falciglio', 
        alergia: 'ninguna', 
        medicina: 'Omeoprazol',
        presionArterial: '120/80',
        tipoSangre: 'A+',
        condicionesMedicas: ['ninguna'],
        usuario: 'nicolas',
        contraseña: '981990'
    },
    { 
        nombre: 'Javier', 
        apellido: 'Falciglio', 
        alergia: 'ninguna', 
        medicina: 'benazepril (Lotensin)',
        presionArterial: '130/85',
        tipoSangre: '0-',
        condicionesMedicas: ['sin vesicula','Hipertensíon'],
        usuario: 'javier',
        contraseña: '17229573'
    },
    // ...otros usuarios...
];


const express = require('express');
const app = express();

// Ruta para manejar las solicitudes de usuario por nombre de usuario
app.get('/gqr/index.html/:usuario', (req, res) => {
    const nombreUsuario = req.params.usuario;

    // Buscar el usuario por nombre de usuario en el array de usuarios
    const usuario = usuarios.find(u => u.usuario === nombreUsuario);

    if (usuario) {
        // Renderizar la página con los datos del usuario
        res.send(`
            <h1>Información del Usuario</h1>
            <p>Nombre: ${usuario.nombre}</p>
            <p>Apellido: ${usuario.apellido}</p>
            <p>Alergia: ${usuario.alergia}</p>
            <p>Medicina que toma: ${usuario.medicina}</p>
            <p>Presión Arterial: ${usuario.presionArterial}</p>
            <p>Tipo de Sangre: ${usuario.tipoSangre}</p>
            <p>Condiciones Médicas: ${usuario.condicionesMedicas.join(', ')}</p>
        `);
    } else {
        // Si el usuario no existe, mostrar un mensaje de error
        res.status(404).send('Usuario no encontrado');
    }
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
