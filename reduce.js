const alunos = [
    {nome: 'João', nota: 4.0, bolsitas:false},
    {nome: 'Maria', nota: 9.5, bolsitas:true},
    {nome: 'Pedro', nota: 3.0, bolsitas:false},
    {nome: 'Bia', nota: 9.0, bolsitas:true}
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)
console.log(resultado)