const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        await connection.query('SELECT * FROM "solicitacao" ORDER BY "solicitacaoID" ASC', (error, result) => {
            try{
                return response.status(200).json(result.rows)
            }
            catch(error){
                return response.status(401).send();
          
            }   
        })
    },

    async create(request, response) {
        const userID = request.headers.authorization;

        const {tpSolicitacao ,tpNecessidade, descricao, status, dataFeed, horaFeed, horaVenc, dataVenc} = request.body;

        await connection.query(`INSERT INTO "solicitacao" ("userID", "tpSolicitacao", "tpNecessidade", 
                               "descricao", "status", "dataFeed", "horaFeed", "horaVenc, dataVenc")
                 VALUES ('${userID}', '${tpSolicitacao}', '${tpNecessidade}', '${descricao}', '${status}', 
                         '${dataFeed}', '${horaFeed}', '${horaVenc}', '${dataVenc}')`, 
                (error, result) => {
            try{
                return response.status(200).json(result)

            }catch(error){
                return response.status(400).send();

            }
        })
    },

    async update(request, response) {
        const id = parseInt(request.params.id);
        const userID = request.headers.authorization;
        const {tpSolicitacao, tpNecessidade, descricao, status, dataFeed, horaFeed, horaVenc, dataVenc} = request.body;

        await connection.query(`UPDATE "solicitacao" SET "tpSolicitacao" = '${tpSolicitacao}',
               "tpNecessidade" = '${tpNecessidade}', "descricao" = '${descricao}', "status" = '${status}',
               "dataFeed" = '${dataFeed}', "horaFeed" = '${horaFeed}', "horaVenc" = '${horaVenc}', "dataVenc" = '${dataVenc}'
                WHERE "solicitacaoID" = ${id} AND "userID" = ${userID}`, (error, result) => {

            try{
                return response.status(200).json(result);
            }
            catch(error){
                return response.status(400).send();
            }
        })
    },

    async delete(request, response) {
        const id = parseInt(request.params.id)
        const userID = request.headers.authorization;

        await connection.query(`DELETE FROM "solicitacao" WHERE "solicitacaoID" = ${id} AND "userID" = ${userID}`,
            (error, result) => {
            try{
                return response.status(200).json(result)
            }
            catch(error){
                return response.status(401).send();

            }
        })
    }
}