////Enlace implicito
const mascota={
    nombre: "lola",
    raza: "rott",
    saludo: function () {
        console.log(`Hola ${this.nombre}, como estas?`)
        
    }
}
mascota.saludo()
////enlace explicito

function saludar() {
    console.log(`Hola ${this.nombre}, tu email es ${this.email} y tus hobbies son ${this.hobbies.join(", ")}.`)
}

const usuario={
    nombre:"Luis",
    email:"luisito.barrionuevodeboca@gmail.com",
    hobbies:["coding","gym"]
}

saludar.call(usuario)

