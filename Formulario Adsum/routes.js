const routes = require('express').Router();
const conexion = require('./config/conexion')

//rutas

//Ver Tickets
routes.get('/', function(req, resp){
    let sql = 'select * from tickets'
    conexion.query(sql,(err, rows, fields) => {
        if (err) throw err;
        else {
            resp.json(rows)
        }
    })
});
routes.get('/categorie', function(req, resp){
    let sql = 'select * from categories'
    conexion.query(sql,(err, rows, fields) => {
        if (err) throw err;
        else {
            resp.json(rows)
        }
    })
});

//Agregar Tickets
routes.post('/add', function(req, resp){
    const {nombre_completo,nombre_empresa,categoria,telefono,email,mensaje} = req.body
    let sql = `insert into tickets (nombre_completo, nombre_empresa, categoria, email, telefono, mensaje) values ('${nombre_completo}','${nombre_empresa}','${categoria}','${email}','${telefono}','${mensaje}')`
    conexion.query(sql,(err, rows, fields) => {
        if (err) throw err;
        else {
            resp.json({status: 'Ticket agregado exitosamente'})
        }
    })
});





module.exports=routes;