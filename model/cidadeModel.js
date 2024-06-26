const mongoose = require('mongoose');
const slugify = require('slugify');

const cidadeSchema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: [true, 'A cidade deve ter nome'],
            unique: [true],
            trim: true
        },
        estado: {
            type: String,
            required: [true, 'A cidade deve ter um estado'],
            trim: true
        },
        slug: String
    }
);

// document middleware que irá criar um slug do nome antes de salvar no BD
cidadeSchema.pre('save', function(next) {
    this.estado = this.estado.toUpperCase(); 
    this.slug = slugify(this.nome, { lower: true });
    next();
});

const Cidade = new mongoose.model('Cidade', cidadeSchema);

module.exports = Cidade;
