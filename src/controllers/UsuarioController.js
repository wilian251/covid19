const connection = require('../database/connection');

module.exports ={
    async index(request, response){
       await connection.query('SELECT * FROM "usuario" ORDER BY "userID" ASC' , ( error, result)=>{
            try{
                console.log(result);
                return response.status(200).json(result.rows);
            }
            catch(error){
                return response.status(400).send();
            }
        })
    },

    async create(request, response){
        const {nome, dataNasc, cpf, rua, numeroCasa , bairro, cidade, 
               estado, cep,pais, codPais, codArea, telefone, email, senha} = request.body;

        await connection.query(`INSERT INTO "usuario" 
                              ("nome", "dataNasc", "cpf", "rua", "numeroCasa", 
                               "bairro", "cidade", "estado", "cep", "pais", 
                               "codPais", "codArea", "telefone", "email", "senha")
                         VALUES ('${nome}', '${dataNasc}', '${cpf}', '${rua}', '${numeroCasa}',
                                 '${bairro}', '${cidade}', '${estado}', '${cep}', '${pais}', 
                                 '${codPais}', '${codArea}','${telefone}', '${email}', '${senha}')`, 
                         (error, result) => {
            try{
              return response.status(200).json(result)
            }
            catch(error){
              return response.status(400).send();
            }
        })
    },
    
    async update(request, response) {
        const id = parseInt(request.params.id)
    
        const { nome, dataNasc, cpf, rua, numeroCasa , bairro, cidade, 
                estado, cep,pais, codPais, codArea, telefone, email, senha } = request.body;

          await connection.query(`UPDATE "usuario" SET "nome" = '${nome}', "dataNasc" ='${dataNasc}',
                                "cpf" = '${cpf}', "rua" = '${rua}', "numeroCasa" = '${numeroCasa}', 
                                "bairro" = '${bairro}',"cidade" = '${cidade}', "estado" = '${estado}', 
                                "cep" = '${cep}', "pais" = '${pais}', "codPais" = '${codPais}', 
                                "codArea" = '${codArea}', "telefone" = '${telefone}', "email" = '${email}',
                                "senha" = '${senha}' WHERE "userID" = ${id}`,(error, result) => {
            try{
                return response.status(200).json(result);
            }catch(error){
                return response.status(401).send();
            }
          }
        )
      },
    
    async delete(request, response) {
        const cpf = request.headers.authorization;
    
        await connection.query(`DELETE FROM "usuario" WHERE "cpf" = ${cpf}`, (error, result) => {
            try{
                return response.status(201).json(result);
            }catch(error){
                return response.status(401).send();
            }
        })
    },
}