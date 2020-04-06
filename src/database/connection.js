const Pool = require('pg').Pool

const connection = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgres://postgres:bater123@localhost:5432/combateCovid'
});

// Criar nova conexão
// const connection = new Pool({
//   user: 'postgres',         //Usuário do Banco
//   host: 'localhost',        //host
//   database: 'combateCovid', //Nome do Banco
//   password: 'bater123',     // Senha do Banco
//   port: 5432,               //Porta do Banco em Operação
// })

console.log(connection);


module.exports = connection;