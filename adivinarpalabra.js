let jugadorDeBoca = "fabra"
let numeroIntentos = 3

function verificarLaPalabra(palabraUsuario,jugadorDeBoca) {
    if (palabraUsuario==jugadorDeBoca) {
        return true
        
    } else {
        return false
        
    }
    
}
function juegoAdivinaLaPalabra(){
    alert(`Adivina al jugador de Boca.\n Este jugador cago al equigo en una final de libertadores \n Solo tienes 3 intentos`)
    
    while (numeroIntentos>0) {
        let palabraUsuario= prompt("Pon el jugador de Boca")
        console.log(palabraUsuario)
        
        if(verificarLaPalabra(palabraUsuario,jugadorDeBoca)){
            alert("correcto")
            break
        }else{
            numeroIntentos--
            if (numeroIntentos>0) {
                alert(`Incorrecto, todavia tienes ${numeroIntentos} intentos`)

            } else {
                alert(`Incorrecto, la palabra oculta era ${jugadorDeBoca}`)
                
            }
        }
        
    }
    
}
juegoAdivinaLaPalabra()

