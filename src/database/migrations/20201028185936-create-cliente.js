'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
 
     await queryInterface.createTable('cliente', {
       id:{
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,

       } ,
       nome:{
         type: Sequelize.STRING,
         allowNull: false,
       },
       cpf:{
         type: Sequelize.STRING,
         allowNull: false,
       },
       nome_fantasia:{
         type: Sequelize.STRING,
         allowNull: false,
       },
       cep:{
         type: Sequelize.STRING,
         allowNull: false,
       },
       pais:{
         type: Sequelize.STRING,
         allowNull: false,
         
       },
       uf:{
         type: Sequelize.STRING,
         allowNull: false,
       },
       cidade:{
         type: Sequelize.STRING,
         allowNull: false,
       },
       endereco:{
         type: Sequelize.STRING,
         allowNull: false,
       },
       numero:{
         type: Sequelize.STRING,
         allowNull: false,
       }, complemento:{
         type: Sequelize.STRING,
         allowNull: true,
       },
       bairro: {
         type: Sequelize.STRING,
         allowNull: true,
       },
       rg:{
         type: Sequelize.STRING,
         allowNull: true,
       },
       matricula:{
         type: Sequelize.STRING,
         allowNull: true,
       },
       sexo:{
         type: Sequelize.STRING,
         allowNull: true,
       },
       telefone:{
         type: Sequelize.STRING,
         allowNull: true,
       },
       celular:{
         type: Sequelize.STRING,
         allowNull: true,
       },
       dt_nascimento:{
         type: Sequelize.DATE,
         allowNull: false,
       },
       email:{
         type: Sequelize.STRING,
        allowNull: true,
       },
       ativo:{
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: 1,
       },
       created_at:{
        type: Sequelize.DATE,
        allowNull: false,

       },
       updated_at:{
        type: Sequelize.DATE,
        allowNull: false,

       }

       
       
       
     });
     
  },

  down: async (queryInterface, Sequelize) => {
   
     await queryInterface.dropTable('cliente');
     
  }
};
