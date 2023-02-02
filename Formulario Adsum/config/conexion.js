const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  port     : '3306',
  database : 'Formulario_Adsum'
});

connection.connect((err)=>{
    if (err) {
        console.log('Ha ocurrido un error' + err);
    } else {
        console.log('Conexion Establecida');
    }
});
module.exports=connection;


