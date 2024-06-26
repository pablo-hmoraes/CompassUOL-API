const express = require('express');
const cidadeController = require('./../controllers/cidadeController');

const router = express.Router();

router
    .route('/')
    .post(cidadeController.createCidade);

router
    .route('/estado/:estado')
    .get(cidadeController.getCidadeByEstado);

router
    .route('/nome/:nome')
    .get(cidadeController.getCidadeByName);

module.exports = router;