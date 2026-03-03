let categorias = [
    { id: 1, nome: "Tradicionais" },
    { id: 2, nome: "Premium" },
    { id: 3, nome: "Zero Açúcar" },
    { id: 4, nome: "Bebidas Geladas" }
];

let produtos = [
    {
        id: 1,
        categoriaId: 1,
        nome: "Sorvete de Chocolate",
        descricao: "Sorvete cremoso feito com cacau selecionado.",
        preco: 12.00,
        imagem: "https://blog.gsuplementos.com.br/wp-content/uploads/2020/11/iStock-1173381958.jpg"
    },
    {
        id: 2,
        categoriaId: 2,
        nome: "Sorvete de Pistache Premium",
        descricao: "Feito com pistache importado e textura super cremosa.",
        preco: 18.00,
        imagem: "https://minhasreceitinhas.com.br/wp-content/uploads/2023/03/Sorvete-de-pistache-1-1200x739.png"
    },
    {
        id: 3,
        categoriaId: 4,
        nome: "Milkshake de Morango",
        descricao: "Milkshake gelado feito com sorvete artesanal.",
        preco: 16.00,
        imagem: "https://assets.haribo.com/image/upload/s--ik3BnJWt--/ar_1:1,c_fill,f_auto/w_555/v1/consumer-sites/pt-br/Recipes/Milkshake-de-morango-banner.png"
    }
];

module.exports = { categorias, produtos };