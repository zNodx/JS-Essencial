const alunos = [
    {nome: 'João', nota: 4.0, bolsita:true},
    {nome: 'Maria', nota: 9.5, bolsita:true},
    {nome: 'Pedro', nota: 3.0, bolsita:true},
    {nome: 'Bia', nota: 9.0, bolsita:true}
]


const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsita).reduce(todosBolsistas))

const algumBolsistas = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsita).reduce(algumBolsistas))

