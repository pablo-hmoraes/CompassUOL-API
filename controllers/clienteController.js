const Cliente = require('../model/clienteModel');
const Cidade = require('../model/cidadeModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

const filterObj = (obj, ...allowedFields) => {
    const newObj = {};
    Object.keys(obj).forEach(el => {
        if (allowedFields.includes(el)) 
        newObj[el] = obj[el];
    });

    return newObj;
};

exports.getClienteByName = catchAsync(async (req, res, next) => {   
	const cliente = await Cliente.findOne({slug: req.params.nome});

    if (!cliente) {
        return next(new AppError('Não existe cliente com esse nome'), 404);
    }
    res.status(200).json({
        status: 'success',
        data: {
            cliente: cliente
        }
    });
});

exports.getClienteById = catchAsync(async (req, res, next) => {
    const cliente = await Cliente.findById(req.params.id);
  
    if (!cliente) {
      return next(new AppError('Não existe cliente com esse ID', 404));
    }
  
    res.status(200).json({
      status: 'success',
      data: {
        cliente: cliente
      }
    });
});

exports.removeCliente = catchAsync(async (req, res, next) => {
    const cliente = await Cliente.findByIdAndDelete(req.params.id);

    if (!cliente) {
      return next(new AppError('Não existe cliente com esse ID', 404));
    }
  
    res.status(204).json({
      status: 'No content'
    });
});

exports.updateClienteName = catchAsync(async (req, res, next) => { 
    const filter = filterObj(req.body, 'nome');

    const cliente = await Cliente.findById(req.params.id);

    if (!cliente) {
        return next(new AppError('Não existe cliente com esse ID', 404));
    }

    cliente.nome = filter.nome;

    cliente.save();
    
    res.status(204).json({
        status: 'No content'
    });

});

exports.createCliente = catchAsync(async (req, res , next) => {
    const newCliente = await Cliente.create(req.body);
    
    const cidade = await Cidade.findOne({nome: newCliente.cidade});

    if (cidade === null)
      return next(new AppError('Essa cidade não existe no nosso Banco de Dados. Por favor crie essa cidade primeiro.'), 500);
    
    res.status(201).json({
        status: 'success',
        data: {
            cliente: newCliente
        }
    });
});
