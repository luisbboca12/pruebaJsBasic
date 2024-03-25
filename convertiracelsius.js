let temperaturaFahrenheit= [32,48,70,100,210]


let convertiraCelsius = temperaturaFahrenheit.map(temp=>(5/9 )*(temp-32))

console.log(convertiraCelsius)
let acumulador = 0
let sumarElementos = temperaturaFahrenheit.forEach(temp => acumulador+=temp)
console.log(acumulador)

let numbers =[1,2,3,4,5,6,7]

let numerosPares = numbers.filter(number=>number %2 ===0)


let palabras =["messi","cr7","messi","neymar","aguero","tevez"]


let  palabrasRepetidas = palabras.reduce((acumulador,currentvalue)=>{
    if (acumulador[currentvalue]) {
  acumulador[currentvalue] ++
    }else{
        acumulador[currentvalue] = 1
    }
    return acumulador
} ,{} )








console.log(palabrasRepetidas)
console.log(numerosPares)