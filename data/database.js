let categorias = [
    {id: 1, nome: "Sushis"},
    {id: 2, nome: "Temakis"},
    {id: 3, nome: "Bebidas"},
    {id: 4, nome: "Sobremesas"}
];

let produtos = [
    {
        categoriaId: 1,
        nome: "Combinado Sushi",
        descricao: "seleção especial de sushis frescos e variados, perfeita para saborear ou compartilhar.",
        preco: 99.00,
        imagem: "https://anota.ai/bloganotaai/wp-content/uploads/sites/5/2020/08/Equipamentos-Para-Fazer-Sushi-1.jpg"
    },
 {
        categoriaId: 2,
        nome: "Temaki Filadélfia",
        descricao: "alga crocante recheada com salmão fresco, cream cheese e arroz temperado, combinação clássica e irresistível.",
        imagem: "https://www.sabornamesa.com.br/media/k2/items/cache/c1034feeb8e544b33d1fc604d40ae043_XL.jpg"
    },
  {
        categoriaId: 3,
        nome: "Refrigerante",
        descricao: "bebida gelada e refrescante, perfeita para acompanhar seu pedido.",
        preco: 8.00,
        imagem: "https://adegabomretiro.com.br/wp-content/uploads/2019/10/366-700x850.jpg"
    }

    
];
module.exports = { categorias, produtos };