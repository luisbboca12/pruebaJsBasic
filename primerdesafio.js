const name = "Luis"
const lastName = "Barrionuevo"
const age = 25 
const isStudent = true


const address = {
    street : "Barrio 200 viviendas",
    city: "Yerba buena",
    state: "Tucuman",
    zipCode: 4107
}
const hobbies= ["studing","gym","coding"]
const bio= "Hi, I'am " + name +' '+ lastName +" and " +age + "years old. \n\
I live in "+ address.city+ ', '+ address.state+ "\n\
and my favourites hobbies are "+ hobbies.join(', ')+"."
console.log(bio)