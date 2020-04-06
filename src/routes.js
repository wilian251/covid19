const express = require('express');

const UsuarioController = require('./controllers/UsuarioController');
const SolicitacaoController = require('./controllers/SolicitacaoController');
const FeedController = require('./controllers/FeedController');

const routes = express.Router();

routes.get('/', (request, response) => {
    response.json({ info: 'API Combate ao COVID-19',
                    rota1: '/usuario',
                    rota2: '/solicitacao',
                    rota3: '/feed'})
})

routes.get('/usuario', UsuarioController.index);
routes.post('/usuario', UsuarioController.create);
routes.put('/usuario/:id', UsuarioController.update);
routes.delete('/usuario/:id', UsuarioController.delete);

routes.get('/solicitacao', SolicitacaoController.index);
routes.post('/solicitacao', SolicitacaoController.create);
routes.put('/solicitacao/:id', SolicitacaoController.update);
routes.delete('/solicitacao/:id', SolicitacaoController.delete);

routes.get('/feed', FeedController.index);

module.exports = routes;