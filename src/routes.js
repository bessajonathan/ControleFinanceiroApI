const express = require("express");
const route = express.Router();
const TransactionController = require("./controller/TransactionController");

route.get("/", (req, res) => {
  res.send({
      mensagem:"Sistema de controle financeiro. By:Jonathan,Lucas",
      versão:"1.0"
  });
});
route.get("/v1", TransactionController.ListarPeriodos);
route.get("/v1/:periodo", TransactionController.ListarDadosDoPeriodo);
route.get("/v1/transacao/:id", TransactionController.Buscartransacao);
route.put("/v1/:id", TransactionController.EditarTransacao);
route.post("/v1", TransactionController.InserirTransacao);
route.delete("/v1/:id", TransactionController.ExcluirTransacao);

module.exports = route;
