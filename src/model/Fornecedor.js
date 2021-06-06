const {Model, DataTypes} = require('sequelize');

class Forncedor extends Model {
    static init (sequelize){
        super.init({

              nome: DataTypes.STRING,
              nome_fantasia: DataTypes.STRING,
              endereco: DataTypes.STRING,
              numero: DataTypes.STRING,
              complemento: DataTypes.STRING,
              bairro: DataTypes.STRING,
              pais: DataTypes.STRING,
              uf: DataTypes.STRING,
              cidade: DataTypes.STRING,
              cnpj: DataTypes.STRING,              
              telefone: DataTypes.STRING,
              celular: DataTypes.STRING,
              email: DataTypes.STRING,
              
        },{
            tableName: 'fornececdor',
            sequelize,
        })
    }
}

module.exports = Forncedor;