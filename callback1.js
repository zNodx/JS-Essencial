const fabricantes = ["Mercedes","Audi", "BMW"]

function impimir(nome,indice){
    console.log(`${indice + 1},${nome}`)
}

fabricantes.forEach(impimir)
fabricantes.forEach(fabricantes => console.log(fabricantes))