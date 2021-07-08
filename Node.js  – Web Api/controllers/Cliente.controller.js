const Cliente = require("../models/Cliente.model.js");


exports.create = (req, res) =>{
    if(!req.body){
        res.status(400).send({
            message: "Conteudo não pode estar vazio"

        });
    }

    const customer = new Cliente({
        email: req.body.email,
        name: req.body.nome,
        active: req.body.nome
    });

    Cliente.create(customer, (err,data) =>{
        if(err)
         res.status(500).send({
             message:
                err.message || "Algum erro ocorreu enquanto criava um clinte"
         });
         else res.send(data)
    });
}

exports.findAll = (req, res) =>{
    Cliente.getAll((err, data) =>{
        if(err)
          res.status(500).send({
              message:
                err.message || "Algum erro ocorreu enquando encontrava o cliente"
          })
    })    
}

exports.findOne = (req, res) => {
    Customer.findById(req.params.clienteId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Não encontramos o cliente com id ${req.params.clienteId}.`
          });
        } else {
          res.status(500).send({
            message: "Erro ao recuperar o cliente com id" + req.params.clienteId
          });
        }
      } else res.send(data);
    });
  };

  exports.update = (req, res) => {
    if (!req.body) {
      res.status(400).send({
        message: "Conteudo não pode estar vazio"
      });
    }
  
    Customer.updateById(
      req.params.customerId,
      new Customer(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Não encontramos o cliente com id ${req.params.customerId}.`
            });
          } else {
            res.status(500).send({
              message: "Erro ao atualizar " + req.params.customerId
            });
          }
        } else res.send(data);
      }
    );
  };

  exports.delete = (req, res) => {
    Customer.remove(req.params.clienteId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.clienteId}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Customer with id " + req.params.clienteId,
          });
        }
      } else res.send({ message: `Clinete fou deletado com sucesso`});
    });
  };

exports.deleteAll = (res,res) =>{
    Cliente.removerall((err, data) =>{
        if(err)
        res.send(500).send({
            message: err.message || "Algum erro ocorreu quando removeu todos os clientes"
        })
        else res.send({ message: 'todos os clientes foram removidos com sucesso'})
    })
}