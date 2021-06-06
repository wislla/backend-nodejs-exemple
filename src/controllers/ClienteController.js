
const Cliente = require('../model/Cliente');

module.exports = {

    async store (req, res){
        const {
            
            nome,
            cpf,
            nome_fantasia,
            cep,
            pais,
            uf,
            cidade,
            endereco,
            numero, 
            complemento,
            bairro,
            rg,
            matricula,
            sexo,
            telefone,
            celular,
            dt_nascimento,
            email,

        } = req.body;

        const cliente = await Cliente.create({
            
            nome,
            cpf,
            nome_fantasia,
            cep,
            pais,
            uf,
            cidade,
            endereco,
            numero, 
            complemento,
            bairro,
            rg,
            matricula,
            sexo,
            telefone,
            celular,
            dt_nascimento,
            email,

        });
       
        return res.json(cliente);
    },

    async index (req, res) {
        const cliente = await Cliente.findAll({
            where:{ ativo:1 } 
        });
        return res.json(cliente);
    },

    async update (req, res) {
        const { id } = req.params;
        const {
            
            nome,
            cpf,
            nome_fantasia,
            cep,
            pais,
            uf,
            cidade,
            endereco,
            numero, 
            complemento,
            bairro,
            rg,
            matricula,
            sexo,
            telefone,
            celular,
            dt_nascimento,
            email,

        } = req.body;

        const cliente = await Cliente.update({
            nome,
            cpf,
            nome_fantasia,
            cep,
            pais,
            uf,
            cidade,
            endereco,
            numero, 
            complemento,
            bairro,
            rg,
            matricula,
            sexo,
            telefone,
            celular,
            dt_nascimento,
            email,
        }, {
            where:{
                id,
            }
        });
        return res.json(cliente);
    },

    async delete (req, res) {
        const {id} = req.params;
        const cliente = await Cliente.destroy({
            where:{ id } 
        })
        return res.json(cliente);
    },

}