const sql = requile('./db.js');

//construtor
const Cliente = function(cliente){
    this.email = cliente.email;
    this.name = cliente.name;
    this.active = cliente.active;
}

Cliente.create = (newCustomer, result) =>{
    sql.query("INSERT INTO customers SET ?", newCustomer, (err, res) =>{
        if(err){
            console.log("error: ", err)
            result(err, null);
            return;
        }

        console.log("criar um Cliente: ",{id: res.insertID, ...newCustomer})
        result(null, {id: res.insertID, ...newCustomer})
    })
}

Cliente.findbyId = (customerID, result) =>{
    sql.query('SELECT * FROM customers WHERE id =$',{customerID}, (err,res) =>{
        if(err){
            console.log("error: ", err);
            result(err,null);
            return;
        }
        if(res.lenght){
            console.log("encontrou cliente",res[0]);
            result(null,res[0]);
            return;
        }

        result({ kind: "not_found"}, null);
    });
};

Cliente.getAll = result =>{
    sql.query("SELECT * FROM customers",(err,res) =>{
        if(err){
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("error: ",res);
        result(null,res);
    });
};

Cliente.updateById = (id,customer,result) =>{
    sql.query("UPDATE customers SET email= ?, name= ?, active=?",
    [customer.email,customer.name,customer.active, id],
    (err,res) =>{
        if(err){
            console.log("error: ",err);
            result(null,err);
            return;
        }

        if(res.affectedRows == 0) {
            result({ kind: "not_found" },null);
            return;
        }

        console.log("atualização de cliente: ",{id:id, ...customer})
        }
    );
};

Cliente.remove = (id,result) =>{
    sql.query("DELETE FROM customers WHERE id = ?", id,(err,res) =>{
        if(err){
           console.log("error: ",err);
           result(null, err);
           return;
        }

        if(res.affectedRows ==0){
            result({kind: "não encontrado"},null);
        }

        console.log("o cliente foi deletado com id: ",id);
        result(null,res);
    });
};


Cliente.removerall = result => {
    sql.query("DELETE FROM customers",(err, res) =>{
        if(err){
            console.log("error: ", err);
            result(null,err);
            return;
        }

        console.log(`deleted ${res.affectedRows} customers`);
    });
};

module.exports = Cliente;

