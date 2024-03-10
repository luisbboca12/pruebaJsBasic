// let stackBooks = []
// let agregarLibro = "agregar libro"
// let sacarLibro = "sacar libro"
// let verStack = "ver stack"
function agregarOSacarLibross(action,stackBooks){
    switch (action) {
        case "add":
            let book = prompt("cual libro deseas agregar")
           stackBooks.push(book)
            break;
    
        case "remove":
            if (stackBooks.length==0) {
                alert ("todavia no hay libros en el stack")
                
            } else {
                stackBooks.pop()
            }
            break;
            case "view":
                console.log(stackBooks)
                break;
            case "exit":
                break;
                default:
                alert("ingrese un valor correcto")
    }
    
    
}

function app() {
    let libros = [];
    let action ="";
    while(action!=="exit"){
        action = prompt("que quieres hacer")
        agregarOSacarLibross(action,libros)
    }
    
}



function agregarCancionesPlaylist(action,playlist){
    switch (action) {
        case "add":
            let sing = prompt("cual cancion deseas agregar")
           playlist.unshift(sing)
            break;
    
        case "remove":
            if (playlist.length==0) {
                alert ("todavia no hay libros en el stack")
                
            } else {
                playlist.shift()
            }
            break;
            case "view":
                alert(`tu playlist esta compuesta por: ${playlist.join("-")}`)
                break;
            case "exit":
                break;
                default:
                alert("ingrese un valor correcto")
    }
    
    
}
function program() {
    let playlist= []
    let action = " "
    while(action!="exit"){
       action = prompt("ingresa la cancion que deseas poniendo add,sacala ponieando remove y mira tu playlist con view. Si quieres salir solo escribe exit")

        agregarCancionesPlaylist(action,playlist)
    }
    
}
program()



// function decitions (bookStack, option)
//  { switch (option)
//      { case 'add': 
//      const book = prompt('Ingrese el nombre del libro');
//       bookStack.push(book);
//        break;
//        case 'remove': 
//        bookStack.pop();
//         break;
//          case 'show':
//              alert(bookStack); 
//              break;
//               case 'exit': 
//               break; 
//               default: console.log('Opcion invalida'); 
//               break; } } 
//               function app() { 
//                 let books = [];
//                  let option = ''; 
//                  while (option !== 'exit') 
//                  { option = prompt('Ingrese una opcion: add, remove, show, exit'); 
//                  decitions(books, option); } }
//                   app(); 



