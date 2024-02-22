class PartidosFechaClasica{
    constructor(localTeam,visitingTeam,stadium,referee,date,hour){
        this.local=localTeam;
        this.visiting=visitingTeam;
        this.stadium=stadium;
        this.referee=referee;
        this.date=date;
        this.hour=hour;
        this.sejugo=false;
        this.jugarPartido= function(){
            this.sejugo= true
            console.log("ya se jugo el partido")
        }
        this.message = function(){ 
            console.log(`El ${date}${this.sejugo ? ' jugaron' : ' se juega'}\n
         ${localTeam} vs ${visitingTeam}\n
         en el/la ${stadium} a las ${hour}hrs\n
         con la conduccion del señor ${referee}.`)};

    }
    

}

const riverVsBoca = new PartidosFechaClasica("river","boca","el monumental","beligoy","domingo 25/02","17:00")

riverVsBoca.message()
riverVsBoca.jugarPartido()
riverVsBoca.message()
