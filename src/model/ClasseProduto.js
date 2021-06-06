const {Model, DataTypes} = require('sequelize');

class ClasseProduto extends Model {

    static init (sequelize){

        super.init({
            descricao: DataTypes.STRING,
        },{
            tableName: 'classe_produto',
            sequelize,
        })
    }
}

module.exports = ClasseProduto;