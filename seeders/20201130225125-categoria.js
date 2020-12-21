'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('categoria', [{
            nombre: 'categoria_test',
            descripcion: 'lorem limsus test',
            createdAt: new Date(),
            updatedAt: new Date()

        }]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('categoria', null, {});
    }
};