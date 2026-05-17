const { Pool } = require('pg');

const pool = new Pool({
    host: 'aws-0-eu-west-1.pooler.supabase.com',
    user: 'postgres.vcwvpwqmdrvukszkfnkk',
    database: 'postgres',
    password: 'AbcaBcabC#123',
    port: 6543,
    ssl: { rejectUnauthorized: false }
});

module.exports = {
    execute: (sql, params) => pool.query(sql, params)
};