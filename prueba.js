//Tipos de datos: Mutabilidad e inmutabilidad
//// primitivos-inmutables
let numero=23
numero=numero+10

console.log(numero)
let esVerdadero=true
esVerdadero=false
console.log(esVerdadero)

//// complejos Mutables

let usuario={nombre:'Pepito',edad:15}
usuario.edad=20
console.log(usuario)
let frutas=['manzana','pera']
frutas[0]='sandia'
console.log(frutas)


function cambiarNombre(objeto) {
    objeto.nombre= "Nuevo Nombre"
}
let usuaria= {nombre:"walter",apellido:"diaz"}
cambiarNombre(usuario)
console.log(usuario)