let frutas = ["manzana", "banana", "mango"];
console.log(frutas); // Imprime: ["manzana", "banana", "mango"]

// Usamos splice() para quitar "banana" y agregar "pera" y "melón" en su lugar
frutas.splice(1, 1, "pera", "melón");
console.log(frutas); // Imprime: ["manzana", "pera", "melón", "mango"]



let frutas = ["manzana", "pera", "mango"];
console.log(frutas); // Imprime: ["manzana", "pera", "mango"]

// Usamos reverse() para invertir el orden del array
frutas.reverse();
console.log(frutas); // Imprime: ["mango", "pera", "manzana"]



let frutas = ["mango", "pera", "manzana"];
console.log(frutas); // Imprime: ["mango", "pera", "manzana"]

// Usamos sort() para ordenar el array alfabéticamente
frutas.sort();
console.log(frutas); // Imprime: ["manzana", "mango", "pera"]


let numeros = [10, 5, 100, 2, 50];
console.log(numeros); // Imprime: [10, 5, 100, 2, 50]

// Usamos sort() para ordenar el array
let numeros = [10, 5, 100, 2, 50];
console.log(numeros); // Imprime: [10, 5, 100, 2, 50]

// Usamos sort() con una función de comparación para ordenar el array
numeros.sort((a, b) => a - b);
console.log(numeros); // Imprime: [2, 5, 10, 50, 100]

let frutas = ["manzana", "pera", "mango"];
console.log(frutas); // Imprime: ["manzana", "pera", "mango"]

// Usamos fill() para cambiar todos los elementos por "naranja"
frutas.fill("naranja");
console.log(frutas); // Imprime: ["naranja", "naranja", "naranja"]
