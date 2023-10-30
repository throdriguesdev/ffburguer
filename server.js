const express = require('express');
const connectDB = require('./dbconnection');
const Pedido = require('./models/pedidos');

const app = express();

// Conectando ao MongoDB
connectDB();

// Para aceitar JSON no corpo das requisições
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Olá, Hamburgueria!');
});

app.post('/pedido', async (req, res) => {
    try {
        const pedido = new Pedido(req.body);
        await pedido.save();
        res.status(201).send(pedido);
    } catch (error) {
        res.status(400).send(error);
    }
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
