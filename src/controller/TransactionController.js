const TransactionModel = require("../models/TransactionModel");

const ListarPeriodos = async(req,res) =>{
    try{
        const dados = await TransactionModel.find({}).distinct("yearMonth");
        const periodos = dados.map(periodo =>{
            return {
                Ano_Mes : periodo
            }
        })
        
        res.send(periodos);
    }catch(erro){
        res.status(500).send(erro);
    }
};

const Buscartransacao = async (req, res) => {
  try {
    const { id } = req.params;
    const transacao = await TransactionModel.findById({ _id: id });
    if (!transacao) {
      res.status(404).send({ mensagem: "Transação não encontrada" });
    }
    res.send(transacao);
  } catch (erro) {
    res.status(500).send(erro);
  }
};

const ListarDadosDoPeriodo = async (req, res) => {
  try {
    const { periodo } = req.params;
    const lstDados = await TransactionModel.find({});
    const lstPeriodo = lstDados.filter((x) => x.yearMonth === periodo);
    res.send(lstPeriodo);
  } catch (erro) {
    res.status(500).send(erro);
  }
};

const InserirTransacao = async (req, res) => {
  try {
    const dados = new TransactionModel(req.body);
    await dados.save();
    res.send({
      mensagem: "Gravado com Sucesso",
    });
  } catch (erro) {
    res.status(500).send(erro);
  }
};

const EditarTransacao = async (req, res) => {
  try {
    const { id } = req.params;
    const transacao = await TransactionModel.findByIdAndUpdate(
      { _id: id },
      req.body
    );

    if (!transacao) {
      res.status(404).send({ mensagem: "Transação não encontrada" });
    }
    res.send({
      mensagem: "Registro Atualizado",
    });
  } catch (erro) {}
};

const ExcluirTransacao = async (req, res) => {
  try {
    const { id } = req.params;
    const transacao = await TransactionModel.findOneAndDelete({ _id: id });

    if (!transacao) {
      res.status(404).send({ mensagem: "Transação não encontrada" });
    }

    res.send({ mensagem: "Registro Excluido com Sucesso" });
  } catch (erro) {
    res.status(500).send(erro);
  }
};

module.exports = {
  ListarDadosDoPeriodo,
  InserirTransacao,
  EditarTransacao,
  ExcluirTransacao,
  Buscartransacao,
  ListarPeriodos
};
