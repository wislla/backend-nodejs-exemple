const CorProduto = require('../model/MarcaProduto');

module.exports = {
    
    async store (request, response) {
        const {descricao} = request.body;
        const cor_produto = await CorProduto.create({
            descricao,
        });
        return response.json(cor_produto);

    },

    async index (request, response) {
        const cor_produto = await CorProduto.findAll();
        return response.json(cor_produto);

    },

    async update (request, response) {
        const { id } = request.params;
        const { descricao } = request.body;
        const cor_produto = await CorProduto.update({
            descricao,

        },{
            where:{ id }
        });
        return response.json(cor_produto);
    }, 

    async delete (request, response) {
        const { id } = request.params;
        const cor_produto = await CorProduto.destroy({
            where:{id}
        })
        return response.json(cor_produto);
    }, 
}