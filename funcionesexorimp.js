////Enlace implicito
const mascota={
    nombre: "lola",
    raza: "rott",
    saludo: function () {
        console.log(`Hola ${this.nombre}, como estas?`)
        
    }
}
mascota.saludo()