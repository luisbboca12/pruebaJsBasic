function llamadoTurno(fecha,hora) {
    console.log(`Buenas ${this.nombre},afiliado${this.afiliado} su turno esta estipulado para el ${fecha} a las ${hora} horas.Muchas gracias!`)
}



const usuario={
    nombre: "Luis Barrionuevo",
    afiliado: 37427
}

const fechaDisponibles= "martes"
const horaDisponible= "14"
const turnosDisponibles= [fechaDisponibles,horaDisponible]

llamadoTurno.call(usuario,fechaDisponibles,horaDisponible)
llamadoTurno.apply(usuario,turnosDisponibles)

const llamarTurnoPersona= llamadoTurno.bind(usuario,fechaDisponibles,horaDisponible)

llamarTurnoPersona()
/////
////arrow functions and lexi bind(Arrow functions are a way to write functions in a shorter way, but they have some limitations compared to the traditional way. )
 //traditional function
 function greetingUser(user){
    return console.log(`Hi ${user}`)
 }

 ///arrow function explicit, This way is used when we have two or more parameters
 const greetingUserWithArrowFunctionExplicit= (user)=>{
    return console.log(`Hi ${user}`)
 }
/// arrow functions implicit 
const greetingUserWithArrowFunctionImplicit= user=> console.log(`Hi ${user}`)

greetingUser("pedro")
greetingUserWithArrowFunctionExplicit("pedro")
greetingUserWithArrowFunctionImplicit("pedro")

const fictionalCharacter=
{name:'Uncle Ben',
messageWithTraditionalFunction:function(message){console.log(`${this.name} says: ${message}`)},messageWithArrowFunction:(message)=>{console.log(`${this.name} says: ${message}`)}
}
fictionalCharacter.messageWithTraditionalFunction('With great power comes great responsability.')
fictionalCharacter.messageWithArrowFunction('Beware of Doctor Octopus.')

//Conclusion:When you work with objects and within these objects you create methods, you must create methods with traditional functions when you want the logic (body) of the function to reference some property of the object with the "this" for it to work correctly.
