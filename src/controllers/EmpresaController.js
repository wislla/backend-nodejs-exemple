const Empresa = require('./../model/Empresa');
module.exports = {
    async store (request, response){
        const {       
            razao_social,
            nome_fantasia,
            endereco,
            numero,
            complemento,
            bairro,
            pais,
            uf,
            cidade,
            cnpj,
            cnae,
            telefone,
            celular,
            email,
        } = request.body;
        
        const empresa = await Empresa.create({
            razao_social,
            nome_fantasia,
            endereco,
            numero,
            complemento,
            bairro,
            pais,
            uf,
            cidade,
            cnpj,
            cnae,
            telefone,
            celular,
            email,
        });
        return response.json(empresa);
    },

    async index (request, response) {
        const empresa = await Empresa.findAll();
        return response.json(empresa);
    },
    
    async update (request, response) {
        const { id } = request.params;
        const {       
            razao_social,
            nome_fantasia,
            endereco,
            numero,
            complemento,
            bairro,
            pais,
            uf,
            cidade,
            cnpj,
            cnae,
            telefone,
            celular,
            email,
        } = request.body;
        const empresa = await Empresa.update({
                 
                razao_social,
                nome_fantasia,
                endereco,
                numero,
                complemento,
                bairro,
                pais,
                uf,
                cidade,
                cnpj,
                cnae,
                telefone,
                celular,
                email,
            
        }, {
            where:{ id }
        })
        return response.json(empresa)
    },
    
    async delete(request, response){
        const {id} = req.params;
        const empresa = await Empresa.destroy({
            where:{id}
        });
        return response.json(empresa)
    },
}