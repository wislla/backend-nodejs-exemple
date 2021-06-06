const {Model, DataTypes} = require('sequelize');

class CorProduto extends Model {

    static init (sequelize){

        super.init({
            descricao: DataTypes.STRING,
        },{
            tableName: 'cor_produto',
            sequelize,
        })
    }
}

module.exports = CorProduto;