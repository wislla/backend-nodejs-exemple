const express = require('express');

const EmpresaController = require('../controllers/EmpresaController');


const routes = express.Router();




routes.get('/', EmpresaController.index);
routes.post('/', EmpresaController.store);
routes.put('/:id', EmpresaController.update);
routes.delete('/:id', EmpresaController.delete);


module.exports  = routes;