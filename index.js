const express = require('express');
const app = express();

app.use(express.json());

let produtos = [
    // --- TRADICIONAIS ---
    { id: 1, nome: "Sorvete de Chocolate", preco: 12.00, categoria: "Tradicionais" },
    { id: 2, nome: "Sorvete de Morango", preco: 12.00, categoria: "Tradicionais" },
    { id: 3, nome: "Sorvete de Baunilha", preco: 11.00, categoria: "Tradicionais" },
    { id: 4, nome: "Sorvete Napolitano", preco: 14.00, categoria: "Tradicionais" },
    { id: 5, nome: "Sorvete de Flocos", preco: 13.00, categoria: "Tradicionais" },
    { id: 6, nome: "Sorvete de Creme", preco: 11.00, categoria: "Tradicionais" },

    // --- PREMIUM ---
    { id: 7, nome: "Sorvete de Pistache", preco: 18.00, categoria: "Premium" },
    { id: 8, nome: "Sorvete de Doce de Leite Argentino", preco: 19.00, categoria: "Premium" },
    { id: 9, nome: "Sorvete Cookies & Cream", preco: 17.00, categoria: "Premium" },
    { id: 10, nome: "Sorvete de Nutella", preco: 20.00, categoria: "Premium" },
    { id: 11, nome: "Sorvete de Ferrero", preco: 22.00, categoria: "Premium" },

    // --- ZERO AÇÚCAR ---
    { id: 12, nome: "Sorvete de Chocolate Zero", preco: 15.00, categoria: "Zero Açúcar" },
    { id: 13, nome: "Sorvete de Coco Zero", preco: 15.00, categoria: "Zero Açúcar" },
    { id: 14, nome: "Sorvete de Morango Zero", preco: 15.00, categoria: "Zero Açúcar" },

    // --- BEBIDAS GELADAS ---
    { id: 15, nome: "Milkshake de Morango", preco: 16.00, categoria: "Bebidas Geladas" },
    { id: 16, nome: "Milkshake de Chocolate", preco: 16.00, categoria: "Bebidas Geladas" },
    { id: 17, nome: "Milkshake de Ovomaltine", preco: 18.00, categoria: "Bebidas Geladas" },
    { id: 18, nome: "Açaí na Tigela", preco: 20.00, categoria: "Bebidas Geladas" }
];


// 1️⃣ Listar todos os produtos
app.get('/produtos', (req, res) => {
    res.status(200).json(produtos);
});


// 2️⃣ Listar categorias sem repetir
app.get('/categoria', (req, res) => {
    const categoriasUnicas = [...new Set(produtos.map(p => p.categoria))];
    res.status(200).json(categoriasUnicas);
});


// 3️⃣ Buscar produtos por categoria específica
app.get('/produtos/categoria/:nomeCategoria', (req, res) => {
    const { nomeCategoria } = req.params;

    const produtosFiltrados = produtos.filter(
        p => p.categoria.toLowerCase() === nomeCategoria.toLowerCase()
    );

    if (produtosFiltrados.length === 0) {
        return res.status(404).json({ message: "Categoria não encontrada." });
    }

    res.status(200).json(produtosFiltrados);
});


// 4️⃣ Criar novo produto
app.post('/produtos', (req, res) => {
    const { nome, preco, categoria } = req.body;
    
    if (!nome || !preco || !categoria) {
        return res.status(400).json({ 
            message: "Nome, preço e categoria são obrigatórios." 
        });
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


// 5️⃣ Atualizar produto
app.put("/produtos/:id", (req, res) => {
    const { id } = req.params;
    const { nome, preco, categoria } = req.body;
    const produtoIndex = produtos.findIndex(p => p.id === parseInt(id));
    
    if (produtoIndex !== -1) {
        produtos[produtoIndex] = { id: parseInt(id), nome, preco, categoria };
        return res.status(200).json(produtos[produtoIndex]);
    }

    res.status(404).json({ message: "Produto não encontrado." });
});


// 6️⃣ Deletar produto
app.delete("/produtos/:id", (req, res) => {
    const { id } = req.params;
    const produtoIndex = produtos.findIndex(p => p.id === parseInt(id));
    
    if (produtoIndex !== -1) {
        produtos.splice(produtoIndex, 1);
        return res.status(204).send();
    }

    res.status(404).json({ message: "Produto não encontrado." });
});


app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});