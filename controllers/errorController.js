const AppError = require('./../utils/appError');

const handleDuplicateFields = err => {  
    const message = 'Este item já existe no Banco de Dados.';
    return new AppError(message, 400);
};
  
const handleValidationError = err => {
    const errors = Object.values(err.errors).map(el => el.message);

    const message = `Dados inválidos. ${errors.join('. ')}`;
    return new AppError(message, 400);
};

const sendError = (err, res) => {
    if (err.isOperational) {
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message
        });
    } 
    else {
        console.error('ERRO', err);

        res.status(500).json({
            status: 'erro',
            message: 'Algo inesperado aconteceu'
        });
    }
};

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    let error = { ...err};
    
    error.message = err.message;
    error.name = err.name;

    if (error.code === 11000) 
        error = handleDuplicateFields(error);
    
    if (error.name === 'ValidationError')
      error = handleValidationError(error);
    
    sendError(error, res);
};