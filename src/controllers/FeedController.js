const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        await connection.query(`SELECT "a"."nome", "a"."dataNasc", "a"."cpf", "a"."rua", "a"."numeroCasa",
              "a"."bairro", "a"."cidade", "a"."estado", "a"."cep", "a"."pais", "a"."codPais", "a"."codArea",
              "a"."telefone", "b"."tpSolicitacao", "b"."tpNecessidade", "b"."descricao", "b"."status",
              "b"."dataFeed", "b"."horaFeed", "b"."horaVenc"
                FROM "usuario" AS "a"
                INNER JOIN "solicitacao" AS "b" ON ( "a"."userID" = "b"."userID" )`, (error, result) =>{
            try{
                return response.status(200).json(result.rows);
            }
            catch(error){
                return response.status(400).send();
            }
        })
    }
}