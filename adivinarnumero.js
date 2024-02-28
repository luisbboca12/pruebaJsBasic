// const numeroSecreto = Math.floor(Math.random()*10 +1 )
// console.log(numeroSecreto)

// const miNumero = parseInt(prompt("Escribe un numero del uno al diez"))

// if (numeroSecreto===miNumero) {
//     alert("Bien acertaste")
    
// } else {
//     alert(`ayyy casi, el numero secreto era ${numeroSecreto} ` )
    
// }

// const ingresarEdad = parseInt(prompt("cuantos años tenes"))


// const mensaje = alert(ingresarEdad>=18?"puedes pasar, eres mayor de edad":"no puedes pasar, eres menor de edad")


const impr = prompt("Ingresa un dia de la semana")

switch (impr) {
    case "lunes":
        alert("hoy es lunes")
        
        break;

      case "martes":
        alert("hoy es martes")
        
        break;

  case "miercoles":
        alert("hoy es miercoles")
        
        break;

        case "jueves":
            alert("hoy es jueves")
            
            break;
      
            case "viernes":
                alert("hoy es viernes")
                
                break;
                case "sabado":
                    alert("hoy es sabado")
                    
                    break;
                    case "domingo":
                        alert("hoy es domingo")
                        
                        break;

                        case "lunes":
                            alert("hoy es lunes")
                            
                            break;
                            default:
                                alert("eso no es un dia de la semana")
                                location.reload()
}