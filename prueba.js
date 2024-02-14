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
////////////
///manipulacion de strings 
//String primitivo
const stringPrimitivo = 'soy un string primitivo'
console.log(typeof stringPrimitivo)

const stringPrimitivoTambien = String('Soy un string primitivo también')
console.log(typeof stringPrimitivoTambien)

//String Objeto
const stringObjeto = new String('Soy un string objeto')
console.log(typeof stringObjeto)

//Acceder a caracteres
const saludo = 'Hola. ¿Cómo estás?'

//Acceder a una letra por su índice.
console.log(saludo[2])
console.log(saludo.charAt(2))

//conocer el indice de una letra
console.log(saludo.indexOf('o'))

//Conocer dónde inicia una palabra
console.log(saludo.indexOf('Cómo'))

//Conocer si existe una palabra dentro de un texto, en caso de no existir se devolverá -1.
console.log(saludo.indexOf('como'))

//Conocer la última posición de una letra
console.log(saludo.lastIndexOf('o'))

//Extraer letras entre un determinado rango. Ingresar el índice inicial y el final más 1.
console.log(saludo.slice(3,5))

//conocer la longitud de un string
console.log(saludo.length)

//Colocar todo el texto en mayúscula
console.log(saludo.toUpperCase())

//Colocar todo el texto en minúscula
console.log(saludo.toLocaleLowerCase())

//Dividir un string. Con el método split colocar la forma como se quiere dividir en medio de las comillas.
const saludoDividido = saludo.split(' ')
console.log(saludoDividido)

//Para acceder a las posiciones del texto dividido
console.log(saludoDividido[1])

//Si se quiere eliminar los espacios de más
const saludoConEspacios = ' Hola mundo '
const saludoSinEspacios = saludoConEspacios.trim()
console.log(saludoSinEspacios)

//Si se quiere reemplazar alguno de los caracteres
const saludoOriginal = 'Hola mundo'
const nuevoSaludo = saludoOriginal.replace('Mundo', '🩷')
console.log(nuevoSaludo)
 ///// tipo number
 // 1. Tipo entero y decimal, aunque se escribe diferente por debajo siguen siendo el mismo tipo de dato.
const entero = 42
const decimal = 3.14

console.log(typeof entero, typeof decimal)

//2. Notación científica
const cientifico = 5e3

//3. Infinitos y NaN
const infinito = Infinity
const NoEsUnNumero = NaN

//Operaciones aritméticas

//1. Suma, resta, multiplicación y división
const suma = 3 + 4
const resta = 4 - 4
const multiplicacion = 4 * 7
const division = 16 / 2

//2. Módulo y exponenciación
const modulo = 15 % 8 //Sirve para saber si un número es múltiplo de otro.
const exponenciacion = 2 ** 3 //Potencia

//Tiene ciertos problemas de Precisión.
const resultado = 0.1 + 0.2
console.log(resultado)

//Para solucionar precisión
console.log(resultado.toFixed(1))

//Por su problema de precisión no es recomendable para comparar, porque aunque se compare con el valor que debería dar, genera un resultado equivocado.
console.log(resultado === 0.3)

//3. Operaciones avanzadas

//Raíz cuadrada
const raizCuadrada = Math.sqrt(16)
console.log(raizCuadrada)

//Valor absoluto
const valorAbsoluto = Math.abs(-7)
console.log(valorAbsoluto)

//Número random (aleatorio)
const aleatorio = Math.random()
console.log(aleatorio)
///conversion a booleanos
//Buena práctica, es agregar al inicio del variable de tipo boolean unas palabras claves que permiten identificar su tipo, como si fuera una pregunta.

//1. is (es)
const isActive = true

//2. has (tener)
const hasPermisson = false

//Se puede tener una conversión implícita o explícita a booleano.

//Conversión Implícita (Lo hace javaScript)
const result = 5 > 3
console.log(result)

const name = 'Platzi'
console.log(!!name) //Para comprobar si tiene un valor anteponer !!


//Conversión Explícita
const value = 0
const explicitBoolean = Boolean(value)
console.log(explicitBoolean)

const otherValue = 24
const explicitOtherBoolean = Boolean(otherValue)
console.log(explicitOtherBoolean)

const snoopy = null;
console.log(snoopy); // null
console.log(typeof snoopy); // "object"

let name;
console.log(name); // undefined
/////////Symbol: Es un tipo de dato cuyos valores son únicos e inmutables. Los símbolos son útiles para crear propiedades únicas para los objetos. Aquí, se crean varios símbolos y se demuestra que cada símbolo es único, incluso si su descripción es la misma.
const uniqueId = Symbol('id');
const symbol1 = Symbol(1);
const symbol2 = Symbol(1);
console.log(symbol1 === symbol2); // false

const ID = Symbol('id');
let user = {};
user[ID] = '12345';
console.log(user); // { [Symbol(id)]: '12345' }
/////////BigInt: Es un objeto incorporado que proporciona una forma de representar números enteros más grandes que 2^53 - 1, que es el límite superior para el tipo de datos Number en JavaScript. Aquí, se crean dos BigInts y se demuestra que pueden manejar números extremadamente grandes sin perder precisión.
const bigNumber = 1234567890123456789012345678901234567890n;
console.log(bigNumber); // 1234567890123456789012345678901234567890n

const numberOfParticlesInTheUniverse = 10n ** 100n; // 10 elevado a 100
console.log(numberOfParticlesInTheUniverse); // Un número extremadamente grande/
//////////////////////
