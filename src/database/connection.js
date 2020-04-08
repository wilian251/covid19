const Pool = require('pg').Pool

const connection = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgres://postgres:bater123@localhost:5432/combateCovid'
});

module.exports = connection;