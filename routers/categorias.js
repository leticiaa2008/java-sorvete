const express = require('express');
const router = express.Router();
const db = require('../data/database');

// GET /categorias
router.get('/', (req, res) => {
    res.status(200).json(db.categorias);
});

// POST /categorias
router.post('/', (req, res) => {
    if (!req.body.nome) {
        return res.status(400).json({
            mensagem: "Nome da categoria é obrigatório."
        });
    }

    const novaCategoria = {
        id: db.categorias.length + 1,
        nome: req.body.nome
    };

    db.categorias.push(novaCategoria);
    res.status(201).json(novaCategoria);
});

module.exports = router;