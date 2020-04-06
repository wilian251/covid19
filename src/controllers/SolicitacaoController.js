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
        const id = request.headers.authorization;

        const {tpSolicitacao ,tpNecessidade, descricao, status, dataFeed, horaFeed, horaVenc} = request.body;

        await connection.query(`INSERT INTO "solicitacao" ("userID", "tpSolicitacao", "tpNecessidade", 
                               "descricao", "status", "dataFeed", "horaFeed", "horaVenc")
                 VALUES ('${id}', '${tpSolicitacao}', '${tpNecessidade}', '${descricao}', '${status}', 
                         '${dataFeed}', '${horaFeed}', '${horaVenc}')`, 
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
        const {tpSolicitacao, tpNecessidade, descricao, status, dataFeed, horaFeed, horaVenc} = request.body;

        await connection.query(`UPDATE "solicitacao" SET "tpSolicitacao" = '${tpSolicitacao}',
               "tpNecessidade" = '${tpNecessidade}', "descricao" = '${descricao}', "status" = '${status}',
               "dataFeed" = '${dataFeed}', "horaFeed" = '${horaFeed}', "horaVenc" = '${horaVenc}' 
                WHERE "solicitacaoID" = ${id}`, (error, result) => {

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

        await connection.query(`DELETE FROM "solicitacao" WHERE "solicitacaoID" = ${id}`,
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