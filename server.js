const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PSSWD
);

mongoose
    .connect(DB)
    .then(() => console.log('Banco de Dados conectado'));

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
    console.log(`App rodando na porta: ${port}`);
});

process.on('unhandledRejection', err => {
    console.log('UNHANDLED REJECTION \n Finalizando...');
    console.log(err.name, err.message);
    server.close(() => {
      process.exit(1);
    });
});

