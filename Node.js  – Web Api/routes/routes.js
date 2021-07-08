module.exports = app =>{
    const customers = require("../controllers/Cliente.controller.js");

    app.post("/customers",customers.create);

    app.get("/customers", customers.findAll);

    app.get("/customers/:customerId", customers.findOne);

    app.put("/customers/:customerId", cutomers.update);

    app.delete("/customers/:customerId", customers.delete);

    app.delete("/customers",customers.deleteAll);



}