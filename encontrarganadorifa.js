let aleatorio = Math.floor(Math.random()*50 )


let participantes = [
    {id: 1, name: "Ivan", ticket: 001},
    {id: 2, name: "Carlos", ticket: 002},
    {id: 3, name: "Maria", ticket: 003},
    {id: 4, name: "Laura", ticket: 004},
    {id: 5, name: "Pedro", ticket: 005},
    {id: 6, name: "Ana", ticket: 006},
    {id: 7, name: "Sofia", ticket: 007},
    {id: 8, name: "Diego", ticket: 008},
    {id: 9, name: "Elena", ticket: 009},
    {id: 10, name: "Lucas", ticket: 010},
    {id: 11, name: "Valentina", ticket: 011},
    {id: 12, name: "Manuel", ticket: 012},
    {id: 13, name: "Juliana", ticket: 013},
    {id: 14, name: "Andres", ticket: 014},
    {id: 15, name: "Gabriela", ticket: 015},
    {id: 16, name: "Martin", ticket: 016},
    {id: 17, name: "Luisa", ticket: 017},
    {id: 18, name: "Juan", ticket: 018},
    {id: 19, name: "Fernanda", ticket: 019},
    {id: 20, name: "Ricardo", ticket: 020},
    {id: 21, name: "Lorena", ticket: 021},
    {id: 22, name: "Miguel", ticket: 022},
    {id: 23, name: "Carolina", ticket: 023},
    {id: 24, name: "Sebastian", ticket: 024},
    {id: 25, name: "Daniela", ticket: 025},
    {id: 26, name: "Pablo", ticket: 026},
    {id: 27, name: "Camila", ticket: 027},
    {id: 28, name: "Jorge", ticket: 028},
    {id: 29, name: "Mariana", ticket: 029},
    {id: 30, name: "Gustavo", ticket: 030},
    {id: 31, name: "Isabela", ticket: 031},
    {id: 32, name: "Roberto", ticket: 032},
    {id: 33, name: "Natalia", ticket: 033},
    {id: 34, name: "Eduardo", ticket: 034},
    {id: 35, name: "Vanesa", ticket: 035},
    {id: 36, name: "Hernan", ticket: 036},
    {id: 37, name: "Liliana", ticket: 037},
    {id: 38, name: "Oscar", ticket: 038},
    {id: 39, name: "Patricia", ticket: 039},
    {id: 40, name: "Emilio", ticket: 040},
    {id: 41, name: "Raquel", ticket: 041},
    {id: 42, name: "Hector", ticket: 042},
    {id: 43, name: "Silvia", ticket: 043},
    {id: 44, name: "Alejandro", ticket: 044},
    {id: 45, name: "Monica", ticket: 045},
    {id: 46, name: "Felipe", ticket: 046},
    {id: 47, name: "Susana", ticket: 047},
    {id: 48, name: "Cristian", ticket: 048},
    {id: 49, name: "Olga", ticket: 049},
    {id: 50, name: "Federico", ticket: 050}
];
let ganador = participantes.find(parti=> parti.id===aleatorio)

if(ganador!=undefined){
    alert(`El ganador es : ${ganador.name}`)
}else{
    alert (`esta mal`)
}
console.log(ganador)