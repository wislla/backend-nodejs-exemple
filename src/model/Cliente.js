const {Model, DataTypes} = require('sequelize');

class Cliente extends Model{
     static init (sequelize){
         super.init({
           
            nome: DataTypes.STRING,
            cpf: DataTypes.STRING,
            nome_fantasia: DataTypes.STRING,
            cep: DataTypes.STRING,
            pais: DataTypes.STRING,
            uf: DataTypes.STRING,
            cidade: DataTypes.STRING,
            endereco: DataTypes.STRING,
            numero: DataTypes.STRING, 
            complemento: DataTypes.STRING,
            bairro: DataTypes.STRING,
            rg: DataTypes.STRING,
            matricula: DataTypes.STRING,
            sexo: DataTypes.STRING,
            telefone: DataTypes.STRING,
            celular: DataTypes.STRING,
            dt_nascimento: DataTypes.DATE,
            email: DataTypes.STRING,
         },{
             tableName:'cliente',
             sequelize
         });
     }

}
module.exports = Cliente;