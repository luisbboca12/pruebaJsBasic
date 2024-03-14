let numeros=  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let palo = ["♠", "♥", "♦", "♣"];
 
let carta = numeros.flatMap((num)=> (num.concat(palo)))
console.log(carta)