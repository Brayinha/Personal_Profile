const mysql = require('mysql');
const dbConfig = require(".../config/config.js");

const connection = mysql.createConnection({
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

connection.connect(error =>{
    if(error) throw error;
    console.log("Conectado com sucesso ao banco de dados");
})

module.exports = connection;