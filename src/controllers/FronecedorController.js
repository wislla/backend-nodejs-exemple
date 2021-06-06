const Fornececdor = require('../model/Fornecedor');

module.exports = {

    async store (request, response) {
        const {
              nome,
              nome_fantasia,
              endereco,
              numero,
              complemento,
              bairro,
              pais,
              uf,
              cidade,
              cnpj,              
              telefone,
              celular,
              email,
        } = request.body;
        const fornececdor = await Fornececdor.create({
              nome,
              nome_fantasia,
              endereco,
              numero,
              complemento,
              bairro,
              pais,
              uf,
              cidade,
              cnpj,              
              telefone,
              celular,
              email,
        });
        return response.json(fornececdor);

    },

    async index (request, response) {
        const fornececdor = await Fornececdor.findAll();
        return response.json(fornececdor);
    },

    async update (request, response) {
        const id = request.params;
        const {
            nome,
            nome_fantasia,
            endereco,
            numero,
            complemento,
            bairro,
            pais,
            uf,
            cidade,
            cnpj,              
            telefone,
            celular,
            email,
      } = request.body;
      const fornececdor = await Fornececdor.update({
            nome,
            nome_fantasia,
            endereco,
            numero,
            complemento,
            bairro,
            pais,
            uf,
            cidade,
            cnpj,              
            telefone,
            celular,
            email,
      },{
          where:{ id }
      })
      return response.json(fornececdor);
    },

    async delete (request, response) {
        const {id} = request.params;
        const fornececdor = await Fornececdor.destroy({
            where:{id}
        });
        return response.json(fornececdor);

    },

}