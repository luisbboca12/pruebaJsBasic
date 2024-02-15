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

