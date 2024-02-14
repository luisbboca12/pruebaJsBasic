function calcularDescuento(price,discountPorcentage) {
    let discount= (price*discountPorcentage)/100
    let priceWithDescount= price-discount
    return priceWithDescount
    
}

let remeraPrice= 40
let blackFriday= 20

console.log(calcularDescuento(remeraPrice,blackFriday))
/*function duplicarArray(arr) {
  return arr.map(item => item * 2);
}
```function duplicarArray(arr) {

&#x20; return arr.map(item => item \* 2);

}

&#x20; &#x20;

1. Funciones Impuras:

&#x20;  \- Una función impura es aquella que puede tener efectos secundarios observables o depender de factores externos.

&#x20;  \- Puede modificar variables fuera de su ámbito local o realizar operaciones que afecten al estado del programa.

&#x20;  \- Puede depender de la entrada/salida, como la lectura de archivos, llamadas a API, interacciones con la base de datos, etc.



&#x20;  Ejemplo de una función impura:



&#x20; ```js
 
   let total = 0;

   function sumarConEfectoSecundario(a) {
     total += a;
     return total;
   }
    */