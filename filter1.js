const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4499, fragil: true},
    {nome: 'Copo de vidro', preco: 12, fragil: true},
    {nome: 'Copo de plástico', preco: 3.50, fragil: false},
]


console.log(produtos.filter(function(p){
     return false
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil 

console.log(produtos.filter(caro).filter(fragil))