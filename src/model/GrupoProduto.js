const {Model, DataTypes} = require('sequelize');

class GrupoProduto extends Model {

    static init (sequelize){

        super.init({
            descricao: DataTypes.STRING,
        },{
            tableName: 'grupo_produto',
            sequelize,
        })
    }
}

module.exports = GrupoProduto;