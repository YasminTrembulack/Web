const chamado = require('../model/chamados');
const deletarAll = require('../../public/js/deleteAll');

module.exports = {
    async pagInicio(req, res) {

        const chamadosEncontrados = await chamado.findAll({
            attributes: ['IDChamado','Cliente', 'Descricao', 'Tipo'],
            raw: true
        });
        res.render('../views/index',{chamadosEncontrados});
    },

    async pagChamado(req, res) {
        tipo = req.params.tipo
        res.render('../views/forms', {tipo});
    },
    async cadastrarChamado(req, res) {
        dados = req.body;
        descricao = req.query.descricao;
        tipo = req.query.tipo;
        
        await chamado.create({
            Cliente: dados.cliente,
            Descricao: dados.descricao,
            Tipo: dados.tipo
        });
        
        res.redirect('/');
       
    },
    async deletarChamado(req, res) {
        const id = req.params.id
        
        const cham = await chamado.findOne({
            where: { IDChamado: id }
        });

        await cham.destroy();
     
        res.redirect('/');
    },

    async pagUpdate(req, res) {

        const id = req.params.id
        const chamadosEncontrados = await chamado.findOne({
            where: { IDChamado: id }
        });
        res.render('../views/update',{chamadosEncontrados});
    },

    async updateChamado(req, res) {

        const dados = req.body;
        console.log(dados);

        const cham = await chamado.findOne({
            where: { IDChamado: dados.IDChamado }
        });

        Object.keys(dados).forEach(key => {
            if (cham[key] !== dados[key]) {
                cham[key] = dados[key];
            }
        });
        await cham.save();

        res.redirect('/');
    },

    async deletarTodosChamado(req, res) {
        let aceito =  deletarAll();
        
        if (aceito== true){
            await chamado.destroy();
        }
        
        res.redirect('/');
    },
}