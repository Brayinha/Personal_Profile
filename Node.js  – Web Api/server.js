const express = require('express');
const bodyParser =require('body-parser');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req,res) =>{
    require("./app/routes/customer.routes.js")(app);
});


app.listen(3000, () =>{
    console.log("Servidor está Executando");
});


