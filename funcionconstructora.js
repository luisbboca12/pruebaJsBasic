class PlayerFutbol{
    constructor(name,nationality,position,actuallyteam,preferredfoot){
        this.name= name;
        this.nationality=nationality;
        this.position=position;
        this.actuallyteam=actuallyteam;
        this.preferredfoot=preferredfoot;
        this.message= console.log(`El es ${name}, su nacionalidad es ${nationality}, juega de ${position} en el ${actuallyteam} y su pierna habil es la ${preferredfoot}`)

    }
}






const lionelMessi = new PlayerFutbol("Lionel Messi","argentino","delantero","Inter Miami F.C.","Izquierdo");
console.log(lionelMessi.message)