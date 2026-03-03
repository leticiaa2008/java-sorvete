const errorHandler = (err, req, res, next) => {
    console.error("Erro:", err.message);

    res.status(500).json({
        sucesso: false,
        mensagem: "Erro interno no servidor.",
        detalhe: err.message
    });
};

module.exports = errorHandler;