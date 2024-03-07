//arrays metodos mutables

let frutas = ["pera","manzana","uvas"]

frutas.push("banana")

console.log(frutas)

////arrays metodos inmutables

let verduras = ["tomate", "calabaza","lechuga"]

let nuevaVerdura = verduras.concat("achicoria","batata")
console.log(nuevaVerdura)
console.log(verduras)

let notas= [ 9,5,3,10,9]
let suma =0

for(let i = 0; i < notas.length;i++){
    suma+=notas[i]

}
console.log(suma)
// // Se me ocurrio este programita para pagar los recibos de la casa
// let valoresRecibos = {
//     agua: 36200,
//     luz: 15000,
//     internet: 50000,
//     gas: 10000,
//   };
  
  
//   let recibos = ["agua", "luz", "internet", "gas"];
  
//   let sumaTotal = 0;
  
//   recibos.forEach(servicio => {
//     sumaTotal += valoresRecibos[servicio];
//   });
  
  
//   let totalAPagar = sumaTotal / 2;
  

//   console.log(`La suma total de los recibos es: $${sumaTotal}`);
//   console.log(`El total a pagar es: $${totalAPagar}`);