const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const database = require('./database/database');
const route = require('./routes');
dotenv.config();

database();
app.use(express.json());
app.use(cors());
app.use(route);


app.listen(process.env.PORT,() =>{
    console.log(`Api rodando na porta ${process.env.PORT}`);
});