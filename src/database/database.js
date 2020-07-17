const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const { DB_CONNECTION } = process.env;

console.log('Iniciando conexão ao MongoDB...');

const db = async() => {
    try {
        await mongoose.connect(
            DB_CONNECTION, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log("Conectado ao banco");
    } catch (error) {
        console.log(error);
    }
};

module.exports = db;

