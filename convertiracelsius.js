let temperaturaFahrenheit= [32,48,70,100,210]


let convertiraCelsius = temperaturaFahrenheit.map(temp=>(5/9 )*(temp-32))

console.log(convertiraCelsius)
let acumulador = 0
let sumarElementos = temperaturaFahrenheit.forEach(temp => acumulador+=temp)
console.log(acumulador)