let notas = [10,9,7,4,5,2,6,7,1,2,4,5]


let aprobadas = notas.filter(nota=>(nota>=6))
console.log(aprobadas)
let promedio = aprobadas.reduce((sum,valor)=>sum+valor,0)/aprobadas.length
console.log(promedio)