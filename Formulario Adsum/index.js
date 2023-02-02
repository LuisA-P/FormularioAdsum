require('./config/conexion');

const express = require('express');
const port = (process.env.port || 3000);

//express
const app = express()

//datos a admitir
app.use(express.json())

//config
app.set('port',port);

//rutas
app.use('/api',require('./routes'));

//iniciar Express

app.listen(app.get('port'),(error)=>{
    if (error) {
        console.log('Error al iniciar servidor');
    } else {
        console.log('Servidor iniciado exitosamente en el puerto: ' +port);
    }
})