const mongoose = require('mongoose');
const slugify = require('slugify');
const date = require('date-and-time');

const clienteSchema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: [true, 'O cliente deve ter um nome'],
            trim: true
        },
        sexo: {
            type: String,
            enum: {
                values: ['Masculino', 'Feminino', 'Outro'],
                message: 'O sexo pode ser: Masculino, Feminino, Outro'
            }
        },
        dataNasc: {
            type: Date,
            required: [true, 'Informe a data de nascimento']
        },
        idade: {
            type: Number,
            default: new Date(2001, 0, 1)
        },
        cidade: {
            type: String,
            required: [true, 'O cliente deve informar a cidade onde mora'],
            trim: true
        },
        slug: String
    }
);

// document middleware que irá criar um slug do nome antes de salvar no BD
clienteSchema.pre('save', function(next) {
    this.slug = slugify(this.nome, { lower: true });
    next();
});

// document middleware para preencher a idade do usuário
clienteSchema.pre('save', function(next) {
    const atual = new Date();
    const nasc = this.dataNasc;

    const sub = date.subtract(atual, nasc);
    this.idade = Math.floor(sub.toDays() / 365);
    next();
});

const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;