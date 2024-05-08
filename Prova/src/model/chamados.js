// Importação
const Sequelize = require('sequelize');
const database = require('../config/db');

// Criando a tabela Chamados
const chamado = database.define('Chamado', {
    IDChamado: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Cliente: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    Descricao: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    Tipo: {
        type: Sequelize.STRING(20),
        allowNull: false
    }
});


// Exportando essa tabela
module.exports = chamado;