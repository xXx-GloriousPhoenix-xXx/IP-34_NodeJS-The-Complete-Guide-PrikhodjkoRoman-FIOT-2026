const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres.vcwvpwqmdrvukszkfnkk', 'AbcaBcabC#123', {
  dialect: 'postgres',
  host: 'aws-0-eu-west-1.pooler.supabase.com',
  port: 6543,
  dialectOptions: {
    ssl: { rejectUnauthorized: false }
  }
});

module.exports = sequelize;