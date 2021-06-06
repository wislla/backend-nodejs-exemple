const {Model, DataTypes} = require('sequelize');

class MarcaProduto extends Model {

    static init (sequelize){

        super.init({
            descricao: DataTypes.STRING,
        },{
            tableName: 'marca_produto',
            sequelize,
        })
    }
}

module.exports = MarcaProduto;