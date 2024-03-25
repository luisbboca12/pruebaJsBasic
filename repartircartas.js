let numeros=  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let palo = ["♠", "♥", "♦", "♣"];
 

function armarBaraja(numeros,palo){
    let carta =[]
    for (let j = 0; j < palo.length; j++) {
        for (let i = 0; i < numeros.length; i++) {
            carta.push(numeros[i] + palo[j]);        
        }    
    }
    return carta
     ///tambien esta esta opcion que es mas facil
//      let carta =[]
// for (let numero of numeros) {
//   for (let palo of palos){
//     carta.push( palo + numero)
//   }
  
// }
   
}

function repartirCartas(cantidad){
    let darCartas=[]
    for (let i = 0; i < cantidad; i++) {
        const indiceAleatorio = Math.floor(Math.random() * armarBaraja(numeros,palo).length);
        darCartas.push(armarBaraja(numeros,palo)[indiceAleatorio])
    }
    return darCartas.join("-") + ` \n`
}


function participantes(numero) {
    let players= []
    while (numero>0) {
    players.push(repartirCartas(5))
    numero --
    }
    alert(players)
}


// participantes(5)



