const Sequelize = require('sequelize');
const dbConfig = require ('../config/database')
const Cliente = require('../model/Cliente');
const Empresa = require('../model/Empresa');
const Fornecedor = require('../model/Fornecedor');
const ClasseProduto = require('../model/ClasseProduto');
const GrupoProduto = require('../model/GrupoProduto');
const MarcaProduto = require('../model/MarcaProduto');
const CorProduto = require('../model/CorProduto');

const connection = new Sequelize (dbConfig);

Cliente.init(connection);
Empresa.init(connection);
Fornecedor.init(connection);
ClasseProduto.init(connection);
GrupoProduto.init(connection);
MarcaProduto.init(connection);
CorProduto.init(connection);

module.exports = connection;