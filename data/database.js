// =============================================================
// data/database.js — Banco de Dados em Memória
// =============================================================
// O que é isso?
//   Em vez de usar um banco de dados real (como MySQL ou MongoDB),
//   guardamos os dados aqui mesmo, dentro de arrays do JavaScript.
//   Isso funciona enquanto o servidor está ligado.
//   Quando o servidor reinicia, os dados voltam para o estado inicial.
//
// Por que usar isso nas aulas?
//   Simplifica o aprendizado! Não precisamos instalar e configurar
//   um banco de dados externo. O foco é aprender a API e os Middlewares.
// =============================================================

// ─── Tabela de Categorias ─────────────────────────────────────
// Cada categoria agrupa produtos do cardápio da sorveteria.
let categorias = [
    { id: 1, nome: 'Sorvetes no Copo' },
    { id: 2, nome: 'Casquinhas' },
    { id: 3, nome: 'Milkshakes' },
    { id: 4, nome: 'Bebidas' }
];

// ─── Tabela de Produtos ───────────────────────────────────────
// Cada produto tem um ID único, pertence a uma categoria (categoriaId),
// e possui nome, descrição, preço e o nome do arquivo de imagem.
let produtos = [
    {
        id: 1,
        categoriaId: 1,
        nome: 'Sorvete de Chocolate (2 bolas)',
        descricao: 'Sorvete cremoso de chocolate servido no copo.',
        preco: 12.90,
        imagem: 'https://thumbs.dreamstime.com/b/duas-bolas-congeladas-de-sorvete-chocolate-em-um-disco-fechado-contra-fundo-branco-porcelana-se-aproximam-173073503.jpg'
    },
    {
        id: 2,
        categoriaId: 2,
        nome: 'Casquinha Baunilha',
        descricao: 'Clássica casquinha com sorvete sabor baunilha.',
        preco: 7.50,
        imagem: 'https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kpXnFFzy/200/200/original?country=br'
    },
    {
        id: 3,
        categoriaId: 3,
        nome: 'Milkshake de Morango',
        descricao: 'Milkshake cremoso feito com sorvete de morango.',
        preco: 15.90,
        imagem: 'https://guiadacozinha.com.br/wp-content/uploads/2015/01/milk-shake-caseiro-1.jpg'
    },
    {
        id: 4,
        categoriaId: 4,
        nome: 'Refrigerante Lata',
        descricao: 'Refrigerante gelado em lata 350ml.',
        preco: 6.00,
        imagem: 'https://conteudo.imguol.com.br/c/entretenimento/34/2018/02/26/refrigerante-1519671522034_v2_450x450.jpg'
    }
];

// ─── Exportação dos dados ─────────────────────────────────────
// Exportamos as duas variáveis num único objeto para que outros
// arquivos (como as rotas) possam importar e usar esses dados.
module.exports = { categorias, produtos };
