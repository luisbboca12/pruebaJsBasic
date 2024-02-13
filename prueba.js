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
///stringss

let player = "messi"
let playerdos= 'cr7'

///concatenar
////opcion 1
let jugadores = player + ' '+ playerdos
console.log(jugadores)
////opcion 2
let jugadoresdos = `my equipo de futbol juega con ${player}`
console.log(jugadoresdos)
////opcion 3
let equipo= [player,playerdos]
console.log(equipo.join(' y '))
let miequipo = "my equipo juega con "
console.log(miequipo.concat(player,' y ', playerdos))
////concatenacion
let poema= 'si quieren ver fiesta,\n\
vengan a la 12,\n\
que esta es la hinchada,\n\
mas loca que hay'
console.log(poema)
///manipulacion de strings 
console.log("manipulacion ")
const stringPrimitivo='Soy un string primitivo'
console.log(typeof stringPrimitivo)
const stringPrimitivoTambien=String('Soy un string primitivo tambiÃ©n')
console.log(typeof stringPrimitivoTambien)
const stringObjeto=new String('Soy un string objeto')
console.log(typeof stringObjeto)
const saludo='Hola. Â¿CÃ³mo estÃ¡s?'
console.log(saludo[2])
console.log(saludo.charAt(2))
console.log(saludo.indexOf('o'))
console.log(saludo.indexOf('CÃ³mo'))
console.log(saludo.indexOf('como'))
console.log(saludo.lastIndexOf('o'))
console.log(saludo.slice(3,5))
console.log(saludo.length)
console.log(saludo.toLocaleUpperCase())
console.log(saludo.toLocaleLowerCase())
const saludoDividido=saludo.split(' ')
console.log(saludoDividido)
console.log(saludoDividido[1])
const saludoConEspacios=' Hola Mundo '
const saludoSinEspacios=saludoConEspacios.trim()
console.log(saludoSinEspacios)
const saludoOriginal='Hola Mundo'
const nuevoSaludo=saludoOriginal.replace('Mundo','ðŸ©µ')
console.log(nuevoSaludo)
 ///// tipo number
 const modulo=15%8
const exponenciacion=2**3
const resultado=0.1+0.2
console.log(resultado)
console.log(resultado.toFixed(1)) ///cuantos valores mostrar
console.log(resultado===0.3)
const raizCuadrada=Math.sqrt(16) //// raiz cuadrada
const valorAbsoluto=Math.abs(-7) //// valor absoluto
const aleatorio=Math.random()/// numero random
console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(aleatorio)
