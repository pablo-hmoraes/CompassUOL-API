const express = require('express');
const clienteController = require('./../controllers/clienteController');

const router = express.Router();

router
    .route('/')
    .post(clienteController.createCliente);   
    
router
    .route('/nome/:nome')
    .get(clienteController.getClienteByName);

router
    .route('/:id')
    .get(clienteController.getClienteById)
    .patch(clienteController.updateClienteName)
    .delete(clienteController.removeCliente);
    
module.exports = router;
