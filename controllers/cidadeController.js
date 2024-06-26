const Cidade = require('./../model/cidadeModel');
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');

exports.getCidadeByName = catchAsync(async (req, res, next) => {
    const cidade = await Cidade.findOne({slug: req.params.nome});

    if (!cidade) {
        return next(new AppError('Não existe cidade com esse nome'), 404);
    }
    res.status(200).json({
        status: 'success',
        data: {
            cidade: cidade
        }
    });
});

exports.getCidadeByEstado = catchAsync(async (req, res, next) => {
    const estado = req.params.estado.toUpperCase();

    const cidades = await Cidade.find({estado: estado});
  
    if (!cidades) {
      return next(new AppError('Não existe cidade com esse ID', 404));
    }
  
    res.status(200).json({
      status: 'success',
      data: {
        cidade: cidades
      }
    });
});

exports.createCidade = catchAsync(async (req, res, next) => {
    const newCidade = await Cidade.create(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            cidade: newCidade
        }
    });
});