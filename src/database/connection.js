const Pool = require('pg').Pool

const db = toString(process.env.DATABASE_URL);

const user = db.substring(11, 25);
const password = db.substring(26, 90);
const host = db.substring(91, 130);
const port = db.substring(131, 135);
const database = db.substring(136, 150);

// Criar nova conexão
const connection = new Pool({
  user: user || 'postgres',         //Usuário do Banco
  host: host || 'localhost',        //host
  database: database || 'combateCovid', //Nome do Banco
  password: password || 'bater123', // Senha do Banco
  port: port || 5432,               //Porta do Banco em Operação
})
// const db1 = "postgres://pbxgodzobhhhfw:b88b242fdd89329bba432a0e82fb2fbfa23ace1a18f8e1b77f8fce2286399865@ec2-34-202-7-83.compute-1.amazonaws.com:5432/dc0m87hj833ouc";

// console.log("User: ",db1.substring(11, 25));
// console.log(user);
// console.log("password: ",db1.substring(26, 90));
// console.log(password);
// console.log("host: ",db1.substring(91, 130));
// console.log(host);
// console.log("port: ",db1.substring(131, 135));
// console.log(port);
// console.log("data base: ",db1.substring(136, 150));
// console.log(database);



module.exports = connection;