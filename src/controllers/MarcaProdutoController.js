const MarcaProduto = require('../model/MarcaProduto');

module.exports = {
    
    async store (request, response) {
        const {descricao} = request.body;
        const classe_produto = await MarcaProduto.create({
            descricao,
        });
        return response.json(classe_produto);

    },

    async index (request, response) {
        const classe_produto = await MarcaProduto.findAll();
        return response.json(classe_produto);

    },

    async update (request, response) {
        const { id } = request.params;
        const { descricao } = request.body;
        const classe_produto = await MarcaProduto.update({
            descricao,

        },{
            where:{ id }
        });
        return response.json(classe_produto);
    }, 

    async delete (request, response) {
        const { id } = request.params;
        const classe_produto = await MarcaProduto.destroy({
            where:{id}
        })
        return response.json(classe_produto);
    }, 
}