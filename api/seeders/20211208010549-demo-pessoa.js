'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('pessoas', [
      {
      nome: 'Fernando Reis',
      ativo: true,
      email: 'Fernando@reis.com',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Cleane Reis',
      ativo: true,
      email: 'Cleane@reis.com',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Arthur Reis',
      ativo: true,
      email: 'arthur@davi.com',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Arlinda Reis',
      ativo: true,
      email: 'arlinda@reis.com',
      role: 'docente',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Francisco Reis',
      ativo: false,
      email: 'francisco@reis.com',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('People', null, {});
  }
};
