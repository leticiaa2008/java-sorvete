const express = require('express');
const app = express();

app.use(express.json());

let produtos = [
    // --- SORVETES ---
    { id: 1, nome: "Sorvete de Chocolate (2 bolas)", preco: 12.00, categoria: "Sorvetes" },
    { id: 2, nome: "Sorvete de Morango (2 bolas)", preco: 12.00, categoria: "Sorvetes" },
    { id: 3, nome: "Sorvete de Baunilha (2 bolas)", preco: 11.00, categoria: "Sorvetes" },
    { id: 4, nome: "Sorvete Napolitano", preco: 14.00, categoria: "Sorvetes" },
    { id: 5, nome: "Sorvete de Cookies & Cream", preco: 15.00, categoria: "Sorvetes" },
    { id: 6, nome: "Sorvete de Pistache", preco: 16.00, categoria: "Sorvetes" },

    // --- CASQUINHAS ---
    { id: 7, nome: "Casquinha Chocolate", preco: 7.00, categoria: "Casquinhas" },
    { id: 8, nome: "Casquinha Baunilha", preco: 7.00, categoria: "Casquinhas" },
    { id: 9, nome: "Casquinha Mista", preco: 8.00, categoria: "Casquinhas" },
    { id: 10, nome: "Casquinha Morango", preco: 7.50, categoria: "Casquinhas" },
    { id: 11, nome: "Casquinha Pistache", preco: 9.00, categoria: "Casquinhas" },

    // --- MILKSHAKES ---
    { id: 12, nome: "Milkshake de Chocolate", preco: 18.00, categoria: "Milkshakes" },
    { id: 13, nome: "Milkshake de Morango", preco: 18.00, categoria: "Milkshakes" },
    { id: 14, nome: "Milkshake de Baunilha", preco: 17.00, categoria: "Milkshakes" },
    { id: 15, nome: "Milkshake de Oreo", preco: 20.00, categoria: "Milkshakes" },
    { id: 16, nome: "Milkshake de Nutella", preco: 22.00, categoria: "Milkshakes" },
    { id: 17, nome: "Milkshake de Doce de Leite", preco: 19.00, categoria: "Milkshakes" },

    // --- SOBREMESAS ---
    { id: 18, nome: "Banana Split", preco: 20.00, categoria: "Sobremesas" },
    { id: 19, nome: "Taça de Sorvete Especial", preco: 22.00, categoria: "Sobremesas" },
    { id: 20, nome: "Brownie com Sorvete", preco: 18.00, categoria: "Sobremesas" },
    { id: 21, nome: "Petit Gateau com Sorvete", preco: 25.00, categoria: "Sobremesas" },
    { id: 22, nome: "Açaí com Sorvete", preco: 19.00, categoria: "Sobremesas" }
];

// 1. Rota para listar todos os produtos
app.get('/produtos', (req, res) => {
    res.json(produtos);
});

// 2. Rota para listar categorias sem repetir
app.get('/categoria', (req, res) => {
    const categoriasUnicas = [...new Set(produtos.map(p => p.categoria))];
    res.json(categoriasUnicas);
});

// 3. Rota para buscar produtos de uma categoria específica
app.get('/produtos/categoria/:nomeCategoria', (req, res) => {
    const { nomeCategoria } = req.params;
    const produtosFiltrados = produtos.filter(
        p => p.categoria.toLowerCase() === nomeCategoria.toLowerCase()
    );
    res.json(produtosFiltrados);
});

// 4. Rota para criar um novo produto
app.post('/produtos', (req, res) => {
    const { nome, preco, categoria } = req.body;
    
    if (!nome || !preco || !categoria) {
        return res.status(400).json({ message: "Nome, preço e categoria são obrigatórios." });
    }

    const novoProduto = {
        id: produtos.length > 0 ? produtos[produtos.length - 1].id + 1 : 1,
        nome,
        preco,
        categoria
    };

    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
});

// 5. Rota para atualizar um produto
app.put("/produtos/:id", (req, res) => {
    const { id } = req.params;
    const { nome, preco, categoria } = req.body;

    const produtoIndex = produtos.findIndex(p => p.id === parseInt(id));

    if (produtoIndex !== -1) {
        produtos[produtoIndex] = { id: parseInt(id), nome, preco, categoria };
        res.json(produtos[produtoIndex]);
    } else {
        res.status(404).json({ message: "Produto não encontrado" });
    }
});

// 6. Rota para deletar um produto
app.delete("/produtos/:id", (req, res) => {
    const { id } = req.params;

    const produtoIndex = produtos.findIndex(p => p.id === parseInt(id));

    if (produtoIndex !== -1) {
        produtos.splice(produtoIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: "Produto não encontrado" });
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
