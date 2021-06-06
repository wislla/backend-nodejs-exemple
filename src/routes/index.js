const express = require('express');
const { route } = require('../routes');
const ClienteRoute = require('./cliente.routes');
const EmpresaRoute = require('./empresa.routes');
const FornecedorRoute = require('./fornecedor.routes');
const ClasseProduto = require('./classe-produto.routes');
const GrupoProduto = require('./grupo-produto.routes');
const MarcaProduto = require('./marca-produto.routes');
const CorProduto = require('./cor-produto.routes');

const routes = express.Router();

routes.use('/cliente', ClienteRoute);
routes.use('/empresa', EmpresaRoute);
routes.use('/fornecedor', FornecedorRoute);
routes.use('/classe-produto', ClasseProduto);
routes.use('/grupo-produto', GrupoProduto);
routes.use('/marca-produto', MarcaProduto);
routes.use('/cor-produto', CorProduto);

module.exports  = routes;