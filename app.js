const express = require('express');

const appError = require('./utils/appError');
const clienteRouter = require('./routes/clienteRoute');
const cidadeRouter = require('./routes/cidadeRoute');
const errorHandler = require('./controllers/errorController');

const app = express();

app.use(express.json({ limit: '10kb' }));

app.use('/api/clientes', clienteRouter);
app.use('/api/cidades', cidadeRouter);


app.all('*', (req, res, next) => {
    next(new appError(`O path ${req.originalUrl} não existe neste server`, 404));
});

app.use(errorHandler);

module.exports = app;