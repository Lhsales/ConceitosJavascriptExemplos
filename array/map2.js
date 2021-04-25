const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
];

// Retornar um array apenas com os preços 

const precos = carrinho.map(function(e){
    const json = JSON.parse(e);
    return json.preco;
});

console.log(precos);