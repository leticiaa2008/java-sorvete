const express = require('express');
const app = express();

app.use(express.json());

let produtos = [
    // --- SUSHIS ---
    { id: 1, nome: "Combinado Sushi", preco: 99.00, categoria: "Sushis" },
    { id: 2, nome: "Combinado Sushi Premium", preco: 115.00, categoria: "Sushis" },
    { id: 3, nome: "Combinado Hot", preco: 99.00, categoria: "Sushis" },
    { id: 4, nome: "Combinado Hot Premium", preco: 120.00, categoria: "Sushis" },
    { id: 5, nome: "Niguiri Variado (10 un)", preco: 45.00, categoria: "Sushis" },
    { id: 6, nome: "Sashimi Variado (12 un)", preco: 55.00, categoria: "Sushis" },

    // --- TEMAKIS ---
    { id: 7, nome: "Temaki Filadélfia", preco: 28.00, categoria: "Temakis" },
    { id: 8, nome: "Temaki Salmão", preco: 25.00, categoria: "Temakis" },
    { id: 9, nome: "Temaki Camarão", preco: 32.00, categoria: "Temakis" },
    { id: 10, nome: "Temaki Hot", preco: 30.00, categoria: "Temakis" },
    { id: 11, nome: "Temaki Atum", preco: 26.00, categoria: "Temakis" },

    // --- BEBIDAS ---
    { id: 12, nome: "Refrigerante", preco: 8.00, categoria: "Bebidas" },
    { id: 13, nome: "Água Mineral", preco: 4.00, categoria: "Bebidas" },
    { id: 14, nome: "Cerveja Heineken", preco: 14.00, categoria: "Bebidas" },
    { id: 15, nome: "Suco Natural", preco: 12.00, categoria: "Bebidas" },
    { id: 16, nome: "Sakê Quente", preco: 18.00, categoria: "Bebidas" },
    { id: 17, nome: "Chá Verde", preco: 7.00, categoria: "Bebidas" },

    // --- SOBREMESAS ---
    { id: 18, nome: "Mochi de Morango", preco: 12.00, categoria: "Sobremesas" },
    { id: 19, nome: "Mochi de Matchá", preco: 12.00, categoria: "Sobremesas" },
    { id: 20, nome: "Dorayaki", preco: 10.00, categoria: "Sobremesas" },
    { id: 21, nome: "Sorvete de Matchá", preco: 15.00, categoria: "Sobremesas" },
    { id: 22, nome: "Tempura de Banana", preco: 14.00, categoria: "Sobremesas" }
];

// 1. Rota para listar todos os produtos
app.get('/produtos', (req, res) => {
    res.json(produtos);
});

// 2. Rota consertada: Listar apenas as categorias (sem repetir nomes)
app.get('/categoria', (req, res) => {
    // Extrai todas as categorias e usa o Set para remover as duplicadas
    const categoriasUnicas = [...new Set(produtos.map(p => p.categoria))];
    res.json(categoriasUnicas);
});

// 3. Rota para buscar produtos der uma categoria específica
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

// 5. Rota para atualizar um produto existente
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