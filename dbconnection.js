const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://thdasrodrigues:*******@cluster0.15bfujt.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conectado ao MongoDB.');
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error);
        process.exit(1);  // Encerra a aplicação com um código de erro
    }
};

module.exports = connectDB;
