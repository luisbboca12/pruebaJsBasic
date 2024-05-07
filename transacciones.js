const transacciones = [
    { descripcion: "Compra de alimentos", monto: -120 },
    { descripcion: "Venta de libros", monto: 300 },
    { descripcion: "Pago de servicios", monto: -50 },
    { descripcion: "Ingreso extra", monto: 150 },
  ];



/////calcular balance 

let balance = transacciones.reduce((acumulador,valor)=>acumulador+ valor.monto,0)
console.log(balance)
///encontrar negativos

let egresos = transacciones.filter(transaccion=>transaccion.monto<0)

console.log(egresos)

///buscar por descripcion

let buscar = transacciones.find((transaccion)=>transaccion.descripcion == "Ingreso extra")
console.log(buscar)

///buscamos el indice de un monto 
let montoIndice = transacciones.findIndex(transaccion => transaccion.monto === 150)
console.log(montoIndice)

///cambiamos la descripcion segun si es un ingreso o un egreso

transacciones.forEach((transaccion)=>{
    transaccion.descripcion=
    transaccion.monto<0?`Egreso:${transaccion.descripcion} `:`Ingreso:${transaccion.descripcion} `
})
console.log("transacciones Actualizadas",transacciones)
const transaccionMasGrande = transacciones.reduce((anterior, actual) =>
  Math.abs(actual.monto) > Math.abs(anterior.monto) ? actual : anterior
);///ssssss