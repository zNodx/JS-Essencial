const carrinho = [ 
    '{"nome?": "Borracha", "preco": 3.45}',
    '{"nome?": "Caderno", "preco": 13.90}',
    '{"nome?": "Kit de Lapis", "preco": 41.45}',
    '{"nome?": "Caneta", "preco": 7.45}'
]

const paraObjeto = json => JSON.parse(json)

const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)