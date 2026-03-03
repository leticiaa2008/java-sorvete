const express = require('express');
const app = express();

// Importando middlewares
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');

// Importando rotas
const categoriasRoutes = require('./routers/categorias');
const produtosRoutes = require('./routers/produtos');

// Middleware para aceitar JSON
app.use(express.json());

// Logger (registra requisições)
app.use(logger);

// Rotas REST
app.use('/categorias', categoriasRoutes);
app.use('/produtos', produtosRoutes);

// Middleware de erro (SEMPRE POR ÚLTIMO)
app.use(errorHandler);

// Iniciando servidor
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});