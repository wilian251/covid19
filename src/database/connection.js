const Pool = require('pg').Pool

const connection = new Pool({
  connectionString: process.env.DATABASE_URL
});

// Criar nova conexão
// const connection = new Pool({
//   user: user || 'postgres',             //Usuário do Banco
//   host: host || 'localhost',            //host
//   database: database || 'combateCovid', //Nome do Banco
//   password: password || 'bater123',     // Senha do Banco
//   port: port || 5432,                   //Porta do Banco em Operação
// })

console.log(connection);


module.exports = connection;