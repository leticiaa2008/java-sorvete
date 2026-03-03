const loggerMiddleware = (req, res, next) => {
    const horaAtual = new Date().toLocaleTimeString();
    console.log(`[${horaAtual}] ${req.method} ${req.url}`);
    next();
};

module.exports = loggerMiddleware;