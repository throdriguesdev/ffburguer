const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  nome: String,
  quantidade: Number,
  observacao: String
});

const pedidoSchema = new mongoose.Schema({
  nomeCliente: String,
  endereco: String,
  valor: Number,
  formaPagamento: String,
  status: String,
  hora: Date,
  data: Date,
  itens: [itemSchema]
});

module.exports = mongoose.model('Pedido', pedidoSchema);

//back validado depois c/ mongodb
