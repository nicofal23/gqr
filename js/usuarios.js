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


const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const nombreUsuario = path.substring(14); // Eliminar "/gqr/index.html/"

    // Buscar el usuario por nombre de usuario en el array de usuarios
    const usuario = usuarios.find(u => u.usuario === nombreUsuario);

    if (path.startsWith('/gqr/index.html/') && usuario) {
        // Configurar la respuesta como HTML
        res.writeHead(200, { 'Content-Type': 'text/html' });

        // Enviar los datos del usuario como respuesta HTML
        res.end(`
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
        // Si el usuario no existe o la ruta no es válida, mostrar un mensaje de error
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Usuario no encontrado');
    }
});

// Iniciar el servidor en el puerto 3000
server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
