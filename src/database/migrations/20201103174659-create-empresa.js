'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.createTable('empresa', { 
        id:{
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        razao_social:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        nome_fantasia:{
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
        },
        complemento:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        bairro:{
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
        cnpj:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        cnae:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        telefone:{
          type: Sequelize.STRING,
          allowNull: true,
        },
        celular:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        email:{
          type: Sequelize.STRING,
          allowNull: false,
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
    
      await queryInterface.dropTable('empresa');
     
  }
};
